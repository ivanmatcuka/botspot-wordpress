<?php

/**
 * Plugin Name:       botspot
 * Description:       botspot UI components
 * Version:           0.2.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Requires Plugins:  contact-form-to-any-api, contact-form-7
 * Author:            Ivan Matcuka
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       botspot-wordpress
 *
 * @package botspot
 */

// Exit if accessed directly
if (! defined('ABSPATH')) {
	exit;
}

use function WP_REST_Blocks\Data\get_blocks;

/**
 * Initialize the botspot plugin: register block categories and blocks.
 */
function botspot_init()
{
	// Add custom block category
	add_filter('block_categories_all', function ($categories) {
		$categories[] = array(
			'slug'  => 'botspot',
			'title' => 'botspot',
		);
		return $categories;
	});

	// Expose menus to REST API
	add_filter('rest_menu_read_access', '__return_true');

	// Register blocks using manifest (WordPress 6.8+)
	if (function_exists('wp_register_block_types_from_metadata_collection')) {
		wp_register_block_types_from_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
		return;
	}

	// Register blocks using manifest (WordPress 6.7)
	if (function_exists('wp_register_block_metadata_collection')) {
		wp_register_block_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
	}

	// Fallback: register each block individually
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';

	foreach (array_keys($manifest_data) as $block_type) {
		register_block_type(__DIR__ . "/build/{$block_type}");
	}
}
add_action('init', 'botspot_init');

/**
 * REST API callback: Get Contact Form 7 form by ID.
 */
function get_cf7_forms_public($data)
{
	$plugin = new Cf7_To_Any_Api();
	$form   = $plugin->Cf7_To_Any_Api_default_form_field($data['id']);

	if ($form['status'] == 404) {
		http_response_code(404);
		return wp_send_json(null);
	}

	return wp_send_json($form);
}

/**
 * REST API callback: Get menu items by slug.
 */
function get_menu_by_slug_public($data)
{
	return wp_send_json(wp_get_nav_menu_items($data['slug']));
}

/**
 * REST API callback: Get all navigations with children.
 */
function get_navigations_public()
{
	$menus  = wp_get_nav_menus();
	$result = array();

	foreach ($menus as $value) {
		$result[] = array_merge($value->to_array(), array('children' => wp_get_nav_menu_items($value->slug)));
	}

	return wp_send_json($result);
}

/**
 * REST API callback: Get all menus.
 */
function get_menus_public()
{
	return wp_send_json(wp_get_nav_menus());
}

/**
 * REST API callback: Get template by slug.
 */
function get_template_by_slug_public($data)
{
	$template = get_block_template(get_stylesheet() . '//' . $data['slug']);

	return wp_send_json(array(
		'blocks' => get_blocks($template->content),
		'data'   => $template,
	));
}

/**
 * REST API callback: Get all template parts.
 */
function get_template_parts_public()
{
	$templateParts = get_block_templates(array(), 'wp_template_part');
	$result        = array();

	foreach ($templateParts as $value) {
		$result[$value->slug]['blocks'] = get_blocks($value->content);
		$result[$value->slug]['data']  = $value;
	}

	return wp_send_json($result);
}

/**
 * REST API callback: Clear ACF gallery field for a post.
 */
function clear_gallery($data)
{
	$field  = acf_maybe_get_field($data['id']);
	$result = acf_update_metadata_by_field($data['postId'], $field, null);

	if (! $result) {
		return wp_send_json('Error occurred!');
	}

	return wp_send_json($result);
}

/**
 * Register custom REST API routes for botspot plugin.
 */
function botspot_register_rest_routes()
{
	register_rest_route('botspot/v1', '/forms/(?P<id>\d+)', array(
		'methods'             => 'GET',
		'callback'            => 'get_cf7_forms_public',
		'permission_callback' => '__return_true',
	));
	register_rest_route('botspot/v1', '/menus/(?P<slug>.+)', array(
		'methods'             => 'GET',
		'callback'            => 'get_menu_by_slug_public',
		'permission_callback' => '__return_true',
	));
	register_rest_route('botspot/v1', '/templates/(?P<slug>.+)', array(
		'methods'             => 'GET',
		'callback'            => 'get_template_by_slug_public',
		'permission_callback' => '__return_true',
	));
	register_rest_route('botspot/v1', '/template-parts', array(
		'methods'             => 'GET',
		'callback'            => 'get_template_parts_public',
		'permission_callback' => '__return_true',
	));
	register_rest_route('botspot/v1', '/navigations', array(
		'methods'             => 'GET',
		'callback'            => 'get_navigations_public',
		'permission_callback' => '__return_true',
	));
	register_rest_route('botspot/v1', '/menus', array(
		'methods'             => 'GET',
		'callback'            => 'get_menus_public',
		'permission_callback' => '__return_true',
	));
	register_rest_route('botspot/v1', '/clear/(?P<id>.+)/(?P<postId>\d+)', array(
		'methods'             => 'POST',
		'callback'            => 'clear_gallery',
		'permission_callback' => '__return_true',
	));
	// Public endpoint to return the current global theme settings (not just theme.json)
	register_rest_route('botspot/v1', '/theme', array(
		'methods' => 'GET',
		'callback' => function () {
			if (!function_exists('wp_get_global_settings')) {
				return new WP_Error('not_supported', 'wp_get_global_settings not available', array('status' => 500));
			}

			$settings = wp_get_global_settings();
			return rest_ensure_response($settings);
		},
		'permission_callback' => '__return_true',
	));
}
add_action('rest_api_init', 'botspot_register_rest_routes');

/**
 * Render a clear button for the ACF gallery field (animation field).
 *
 * @param array $field The ACF field array.
 */
function botspot_render_clear_button($field)
{
	echo "<p style='margin: 8px 0 0 0'><a href='#' class='acf-button button button-primary acf-gallery-clear' data-id='{$field['id']}'>Conveniently Clear Images</a></p>";
}
add_action('acf/render_field/name=animation', 'botspot_render_clear_button');

/**
 * Inject custom JS for the ACF gallery clear button in the admin footer.
 */
function botspot_acf_input_admin_footer()
{
?>
	<script type="text/javascript">
		(function() {
			let params = new URLSearchParams(document.location.search);
			let postId = params.get("post");

			function clearGallery(fieldId) {
				fetch(`/wp-json/botspot/v1/clear/${fieldId.split('-')?.[1]}/${postId}`, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json",
					}
				}).then((response) => {
					if (!response.ok) {
						console.error('Couldn\'t clear the gallery');
						return;
					}
					window.location.reload();
				});
			}

			document.querySelector('.acf-gallery-clear')?.addEventListener('click', (element) => {
				const fieldId = element.target.dataset.id;
				clearGallery(fieldId);
			});
		})();
	</script>
<?php
}
add_action('acf/input/admin_footer', 'botspot_acf_input_admin_footer');

/**
 * Register custom endpoints for flat fields
 */
function botspot_register_flat_fields_routes()
{
	// Single post flat fields
	register_rest_route('botspot/v1', '/flat-post/(?P<id>\\d+)', array(
		'methods' => 'GET',
		'callback' => function ($request) {
			$post = get_post($request['id']);
			if (!$post) {
				return new WP_Error('not_found', 'Post not found', array('status' => 404));
			}
			$data = array(
				'id' => $post->ID,
				'slug' => $post->post_name,
				'flat_title' => get_the_title($post),
				'flat_excerpt' => get_the_excerpt($post),
				'featured_image' => get_the_post_thumbnail_url($post, 'full'),
				'info' => function_exists('get_fields') ? get_fields($post->ID) : [],
				'blocks' => get_blocks(get_post_field('post_content', $post->ID)),
				'template' => get_page_template_slug($post->ID),
			);
			return rest_ensure_response($data);
		},
		'permission_callback' => '__return_true',
	));
	// List of posts flat fields (optionally filter by type)
	register_rest_route('botspot/v1', '/flat-posts', array(
		'methods' => 'GET',
		'callback' => function ($request) {
			$args = array(
				'post_type' => $request['type'],
				'posts_per_page' => $request['per_page'],
				'paged' => $request['page'],
				'category_name' => $request['category'],
				'post_status' => 'publish',
				'name' => $request['slug'],
			);

			$query = new WP_Query($args);
			$posts = array();
			foreach ($query->posts as $post) {
				$posts[] = array(
					'id' => $post->ID,
					'slug' => $post->post_name,
					'flat_title' => get_the_title($post),
					'flat_excerpt' => get_the_excerpt($post),
					'featured_image' => get_the_post_thumbnail_url($post, 'full'),
					'info' => function_exists('get_fields') ? get_fields($post->ID) : [],
					'blocks' => get_blocks(get_post_field('post_content', $post->ID)),
					'template' => get_page_template_slug($post->ID),
				);
			}

			$response = rest_ensure_response($posts);
			$response->header('X-WP-TotalPages', $query->max_num_pages);

			return $response;
		},
		'permission_callback' => '__return_true',
		'args' => array(
			'type' => array('required' => false, 'type' => 'string'),
			'per_page' => array('required' => false, 'type' => 'integer'),
			'page' => array('required' => false, 'type' => 'integer'),
			'category' => array('required' => false, 'type' => 'string'),
			'slug' => array('required' => false, 'type' => 'string'),
		),
	));
}
add_action('rest_api_init', 'botspot_register_flat_fields_routes');
