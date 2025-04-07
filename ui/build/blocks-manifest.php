<?php
// This file is generated. Do not modify it manually.
return array(
	'botspot-button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/botspot-button',
		'version' => '0.1.0',
		'title' => 'Button',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'React Button',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'className' => array(
				'type' => 'string'
			),
			'href' => array(
				'type' => 'string',
				'default' => '#'
			),
			'target' => array(
				'type' => 'string',
				'default' => '__self'
			),
			'type' => array(
				'type' => 'string',
				'default' => 'button'
			),
			'variant' => array(
				'type' => 'string',
				'enum' => array(
					'primary',
					'secondary',
					'outline',
					'menu',
					'menuItem',
					'topic'
				),
				'default' => 'primary'
			),
			'children' => array(
				'type' => 'string',
				'default' => 'Button'
			),
			'disabled' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'botspot-button',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:.index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'media-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/media-block',
		'version' => '0.1.0',
		'title' => 'Media Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'React Media Block',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'assetUrl' => array(
				'type' => 'string',
				'default' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'banner' => array(
				'type' => 'boolean'
			),
			'fullHeight' => array(
				'type' => 'boolean'
			),
			'objectFit' => array(
				'type' => 'string',
				'enum' => array(
					'contain',
					'cover'
				),
				'default' => 'cover'
			)
		),
		'textdomain' => 'botspot-media-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:.index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
