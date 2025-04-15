<?php

/**
 * Plugin Name:       botspot
 * Description:       botspot UI
 * Version:           0.1.0
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

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function ui_botspot_button_block_init()
{
	/**
	 * Adds a new block category.
	 */
	add_filter('block_categories_all', function ($categories) {
		$categories[] = array(
			'slug'  => 'botspot',
			'title' => 'botspot',
		);

		return $categories;
	});

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if (function_exists('wp_register_block_types_from_metadata_collection')) {
		wp_register_block_types_from_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 *
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
	 */
	if (function_exists('wp_register_block_metadata_collection')) {
		wp_register_block_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
	}
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';

	foreach (array_keys($manifest_data) as $block_type) {
		register_block_type(__DIR__ . "/build/{$block_type}");
	}
}


function get_cf7_forms_public($data)
{
	$plugin = new Cf7_To_Any_Api();

	$form = $plugin->Cf7_To_Any_Api_default_form_field($data["id"]);

	if ($form['status'] == 404) {
		http_response_code(404);
		return wp_send_json(null);
	};

	return wp_send_json($form);
}

function project_dequeue_unnecessary_styles()
{
	wp_dequeue_style('forms');
	wp_deregister_style('forms');
}

add_action('wp_print_styles', 'project_dequeue_unnecessary_styles');
add_action('init', 'ui_botspot_button_block_init');
add_action('rest_api_init', function () {
	register_rest_route('botspot/v1', '/forms/(?P<id>\d+)', [
		'methods'  => 'GET',
		'callback' => 'get_cf7_forms_public',
		'permission_callback' => '__return_true',
	]);
});
