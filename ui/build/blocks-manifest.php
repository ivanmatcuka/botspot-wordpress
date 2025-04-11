<?php
// This file is generated. Do not modify it manually.
return array(
	'banner' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/banner',
		'version' => '0.1.0',
		'title' => 'Banner',
		'category' => 'widgets',
		'icon' => 'cover-image',
		'description' => 'React Banner',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'headline' => array(
				'type' => 'string',
				'default' => 'Sample Headline'
			),
			'mediaBlockOptions' => array(
				'type' => 'object',
				'default' => array(
					'autoplay' => true,
					'banner' => true,
					'objectFit' => 'cover',
					'assetUrl' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
				)
			),
			'primary' => array(
				'type' => 'object',
				'default' => array(
					'href' => '#',
					'value' => 'Primary CTA'
				)
			),
			'secondary' => array(
				'type' => 'object',
				'default' => array(
					'href' => '#',
					'value' => 'Secondary CTA'
				)
			),
			'sublineElement' => array(
				'type' => 'string',
				'default' => 'This is a sample subline. <strong>HTML content</strong> is allowed.'
			)
		),
		'textdomain' => 'botspot-banner',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'botspot-button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/botspot-button',
		'version' => '0.1.0',
		'title' => 'Button',
		'category' => 'widgets',
		'icon' => 'button',
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
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'gallery-tile' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/gallery-tile',
		'version' => '0.1.0',
		'title' => 'Gallry Tile',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'React Gallry Tile',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'alt' => array(
				'type' => 'string',
				'default' => 'Placeholder image'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => 'grey.100'
			),
			'imgUrl' => array(
				'type' => 'string',
				'default' => 'https://picsum.photos/id/237/400/200'
			)
		),
		'textdomain' => 'botspot-gallery-tile',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'iframe' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/iframe',
		'version' => '0.1.0',
		'title' => 'Iframe',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'React Iframe',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'src' => array(
				'type' => 'string',
				'default' => 'https://sketchfab.com/models/7d89f65475664a0eabc39e3e7790cddf/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1'
			)
		),
		'textdomain' => 'botspot-iframe',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'main-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/main-block',
		'version' => '0.1.0',
		'title' => 'Main Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'React Main Block',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'cta' => array(
				'type' => 'object',
				'default' => array(
					'href' => '#',
					'value' => 'Get Started',
					'variant' => 'primary'
				)
			),
			'headline' => array(
				'type' => 'string',
				'default' => 'Welcome to MainBlock'
			),
			'subAssetUrl' => array(
				'type' => 'string',
				'default' => 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU'
			),
			'subline' => array(
				'type' => 'string',
				'default' => 'Experience the best with our <strong>exclusive features</strong>'
			)
		),
		'textdomain' => 'botspot-main-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
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
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'page-container' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/page-container',
		'version' => '0.1.0',
		'title' => 'Page Container',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'React Page Container',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'banner' => array(
				'type' => 'boolean'
			),
			'mb' => array(
				'type' => 'object',
				'default' => array(
					'md' => 20,
					'xs' => 10
				)
			),
			'mt' => array(
				'type' => 'object',
				'default' => array(
					'md' => 10,
					'xs' => 5
				)
			)
		),
		'textdomain' => 'botspot-page-container',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'secondary-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/secondary-block',
		'version' => '0.1.0',
		'title' => 'Secondary Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'React SecondaryB lock',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'headline' => array(
				'type' => 'string',
				'default' => 'Ready to Take the Next Step?'
			),
			'primary' => array(
				'type' => 'object',
				'default' => array(
					'href' => '#',
					'value' => 'Get Started'
				)
			),
			'secondary' => array(
				'type' => 'object',
				'default' => array(
					'href' => '#',
					'value' => 'Learn More'
				)
			),
			'sublineElement' => array(
				'type' => 'string',
				'default' => 'Boost your business with <strong>custom solutions</strong> that scale.'
			)
		),
		'textdomain' => 'botspot-secondary-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'skeleton-video' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/skeleton-video',
		'version' => '0.1.0',
		'title' => 'Skeletion Video',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'React Skeleton Video',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'autoPlay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'className' => array(
				'type' => 'string'
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'muted' => array(
				'type' => 'boolean',
				'default' => true
			),
			'videoSrc' => array(
				'type' => 'string',
				'default' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
			)
		),
		'textdomain' => 'botspot-skeleton-video',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'tile' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/tile',
		'version' => '0.1.0',
		'title' => 'Tile',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'React Tile',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'headline' => array(
				'type' => 'string',
				'default' => 'Default headline'
			)
		),
		'textdomain' => 'botspot-tile',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'typography' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/typography',
		'version' => '0.1.0',
		'title' => 'Typography',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'React Typography',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'className' => array(
				'type' => 'string'
			),
			'variant' => array(
				'type' => 'string',
				'enum' => array(
					'h1',
					'h2',
					'h3',
					'h4',
					'h5',
					'h6'
				),
				'default' => 'primary'
			),
			'children' => array(
				'type' => 'string',
				'default' => 'Text'
			)
		),
		'textdomain' => 'botspot-typography',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
