<?php

/**
 * Plugin Name:       botspot
 * Description:       botspot UI components
 * Version:           0.1.2
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Requires Plugins:  contact-form-to-any-api, contact-form-7, rest-api-blocks, classic-menu-in-navigation-block
 * Author:            Ivan Matcuka
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       botspot-wordpress
 *
 * @package botspot
 */

if (! defined('ABSPATH')) {
	exit;
}
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function botspot_init()
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
	 * Exposes menus to the REST API.
	 */
	add_filter('rest_menu_read_access', '__return_true');

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

function get_menu_by_slug_public($data)
{
	return wp_send_json(wp_get_nav_menu_items($data["slug"]));
}

function get_menus_public()
{
	return wp_send_json(wp_get_nav_menus());
}

function init_rest_api()
{
	register_rest_route('botspot/v1', '/forms/(?P<id>\d+)', [
		'methods'  => 'GET',
		'callback' => 'get_cf7_forms_public',
		'permission_callback' => '__return_true',
	]);

	register_rest_route('botspot/v1', '/menus/(?P<slug>.+)', [
		'methods'  => 'GET',
		'callback' => 'get_menu_by_slug_public',
		'permission_callback' => '__return_true',
	]);

	register_rest_route('botspot/v1', '/menus', [
		'methods'  => 'GET',
		'callback' => 'get_menus_public',
		'permission_callback' => '__return_true',
	]);
}

add_action('init', 'botspot_init');
add_action('rest_api_init', 'init_rest_api');
