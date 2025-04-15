<?php
// This file is generated. Do not modify it manually.
return array(
	'banner' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/banner',
		'version' => '0.1.0',
		'title' => 'Banner',
		'category' => 'botspot',
		'icon' => 'cover-image',
		'description' => 'Represents a banner that can be found at the top of most pages.',
		'attributes' => array(
			'headline' => array(
				'type' => 'string',
				'default' => 'Sample Headline',
				'description' => 'Text only.',
				'name' => 'Banner Headline'
			),
			'mediaBlockOptions' => array(
				'type' => 'object',
				'default' => array(
					'objectFit' => 'cover',
					'assetUrl' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
				),
				'description' => 'Those properties come directly from Material UI. They\'re safe but use with care.',
				'name' => 'Media Block Settings'
			),
			'sublineElement' => array(
				'type' => 'string',
				'default' => 'This is a sample subline. <strong>HTML content</strong> is allowed.',
				'name' => 'Subline Element',
				'description' => 'Subline element. HTML content is allowed'
			)
		),
		'textdomain' => 'botspot-banner',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css'
	),
	'button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/button',
		'version' => '0.1.0',
		'title' => 'Button',
		'category' => 'botspot',
		'icon' => 'button',
		'description' => 'Custom button component based on Material UI. For more info: https://material-ui.com/components/button/',
		'attributes' => array(
			'className' => array(
				'type' => 'string',
				'description' => 'Optional classes are provided. The site and the editor support Tailwind.',
				'name' => 'CSS Classes'
			),
			'href' => array(
				'type' => 'string',
				'default' => '#',
				'description' => 'Provide a link. Can be both external and internal.',
				'name' => 'Link'
			),
			'target' => array(
				'type' => 'string',
				'enum' => array(
					'_blank',
					'_self',
					'_parent',
					'_top'
				),
				'default' => '_self',
				'name' => 'Target',
				'description' => 'Link target. For more info: https://www.w3schools.com/tags/att_a_target.asp'
			),
			'type' => array(
				'type' => 'string',
				'enum' => array(
					'button',
					'submit',
					'reset'
				),
				'default' => 'button',
				'name' => 'Type',
				'description' => 'Button type. For more info: https://www.w3schools.com/tags/att_button_type.asp'
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
				'default' => 'primary',
				'name' => 'Variant',
				'description' => 'Button variant. Those are custom and based on the original design.'
			),
			'children' => array(
				'type' => 'string',
				'default' => 'Button',
				'name' => 'Text',
				'description' => 'Button text. Technically is React\'s \'children\'.'
			),
			'disabled' => array(
				'type' => 'boolean',
				'default' => false,
				'name' => 'Disabled',
				'description' => 'When present, it specifies that the button should be disabled. For more info: https://www.w3schools.com/tags/att_button_disabled.asp'
			)
		),
		'textdomain' => 'botspot-button',
		'editorScript' => 'file:./index.js'
	),
	'download-area-content' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/download-area-content',
		'version' => '0.1.0',
		'title' => 'Download Area Content',
		'category' => 'botspot',
		'icon' => 'download',
		'description' => 'Higly specific block for Download Area. Don\'t use it elsewhere.',
		'attributes' => array(
			'formId' => array(
				'type' => 'number',
				'default' => 15422,
				'name' => 'Form ID',
				'description' => 'The ID of the dynamic form that points to a Contact Form 7 instance.'
			)
		),
		'textdomain' => 'botspot-download-area-content',
		'editorScript' => 'file:./index.js'
	),
	'dynamic-form' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/dynamic-form',
		'version' => '0.1.0',
		'title' => 'Dynamic Form',
		'category' => 'botspot',
		'icon' => 'feedback',
		'description' => 'Based on Contact Form 7 definitions. For more info: https://contactform7.com/',
		'attributes' => array(
			'formId' => array(
				'type' => 'number',
				'default' => 15420,
				'name' => 'Form ID',
				'description' => 'The ID of the dynamic form that points to a Contact Form 7 instance.'
			),
			'frameless' => array(
				'type' => 'boolean',
				'default' => false,
				'name' => 'Frameless',
				'description' => 'Display the form without a frame.'
			),
			'secondary' => array(
				'type' => 'boolean',
				'default' => false,
				'name' => 'Secondary',
				'description' => 'Display secondary variant of the form.'
			)
		),
		'textdomain' => 'botspot-dynamic-form',
		'editorScript' => 'file:./index.js'
	),
	'gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/gallery',
		'version' => '0.1.0',
		'title' => 'Gallery',
		'category' => 'botspot',
		'icon' => 'format-gallery',
		'description' => 'Highly specific block to store two iframes.',
		'attributes' => array(
			'transparent' => array(
				'type' => 'boolean',
				'default' => true,
				'name' => 'Transparent',
				'description' => 'If the background is transparent.'
			)
		),
		'textdomain' => 'botspot-gallery',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css'
	),
	'gallery-tile' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/gallery-tile',
		'version' => '0.1.0',
		'title' => 'Gallery Tile',
		'category' => 'botspot',
		'icon' => 'format-gallery',
		'description' => 'This block has one image and one free slot.',
		'attributes' => array(
			'alt' => array(
				'type' => 'string',
				'default' => 'image',
				'name' => 'Alt text',
				'description' => 'Alt text for the image. For more info: https://www.w3schools.com/tags/att_img_alt.asp'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => 'grey.100',
				'enum' => array(
					'none',
					'grey.100',
					'white'
				),
				'name' => 'Background Color',
				'description' => 'Background color for the tile. These come from the Material UI palette. For more info: https://material-ui.com/customization/palette/'
			),
			'imgUrl' => array(
				'type' => 'string',
				'default' => 'https://picsum.photos/id/237/400/200',
				'name' => 'Image URL',
				'description' => 'Image URL. For more info: https://www.w3schools.com/tags/att_img_src.asp'
			)
		),
		'textdomain' => 'botspot-gallery-tile',
		'editorScript' => 'file:./index.js'
	),
	'iframe' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/iframe',
		'version' => '0.1.0',
		'title' => 'Iframe',
		'category' => 'botspot',
		'icon' => 'editor-video',
		'description' => 'This block is initially meant to store sketchfab iframes.',
		'attributes' => array(
			'src' => array(
				'type' => 'string',
				'default' => 'https://sketchfab.com/models/7d89f65475664a0eabc39e3e7790cddf/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1',
				'name' => 'Source',
				'description' => 'The source of the iframe.'
			)
		),
		'textdomain' => 'botspot-iframe',
		'editorScript' => 'file:./index.js'
	),
	'jobs' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/jobs',
		'version' => '0.1.0',
		'title' => 'Jobs',
		'category' => 'botspot',
		'icon' => 'networking',
		'description' => 'The contents of this block can be set through WordPress posts only.',
		'textdomain' => 'botspot-jobs',
		'editorScript' => 'file:./index.js'
	),
	'landing-page-products' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/landing-page-products',
		'version' => '0.1.0',
		'title' => 'Landing Page Products',
		'category' => 'botspot',
		'icon' => 'cart',
		'description' => 'The contents of this block can be set through WordPress products (custom post type) only.',
		'textdomain' => 'botspot-landing-page-products',
		'editorScript' => 'file:./index.js'
	),
	'main-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/main-block',
		'version' => '0.1.0',
		'title' => 'Main Block',
		'category' => 'botspot',
		'icon' => 'slides',
		'description' => 'React Main Block',
		'attributes' => array(
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
				'default' => 'Experience the best with our exclusive features'
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
		'icon' => 'media-video',
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
		'icon' => 'align-full-width',
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
			'bgcolor' => array(
				'type' => 'string',
				'enum' => array(
					'none',
					'grey.100'
				),
				'default' => 'none'
			),
			'mb' => array(
				'type' => 'object',
				'default' => array(
					'md' => 10,
					'xs' => 5
				)
			),
			'mt' => array(
				'type' => 'object',
				'default' => array(
					'md' => 10,
					'xs' => 5
				)
			),
			'pb' => array(
				'type' => 'object',
				'default' => array(
					'md' => 10,
					'xs' => 5
				)
			),
			'pt' => array(
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
	'partner-logo' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/partner-logo',
		'version' => '0.1.0',
		'title' => 'Partner Logo',
		'category' => 'widgets',
		'icon' => 'format-video',
		'description' => 'React Partner Logo',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'name' => array(
				'type' => 'string',
				'default' => 'partner-logo'
			),
			'src' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'botspot-partner-logo',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'partner-logo-container' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/partner-logo-container',
		'version' => '0.1.0',
		'title' => 'Partner Logo Container',
		'category' => 'widgets',
		'icon' => 'networking',
		'description' => 'React Partner Logo Container',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'botspot-partner-logo-container',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'people' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/people',
		'version' => '0.1.0',
		'title' => 'People',
		'category' => 'widgets',
		'icon' => 'admin-users',
		'description' => 'React People',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'botspot-people',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'posts' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/posts',
		'version' => '0.1.0',
		'title' => 'Posts',
		'category' => 'widgets',
		'icon' => 'slides',
		'description' => 'React Posts',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'hidePagination' => array(
				'type' => 'boolean',
				'default' => false
			),
			'list' => array(
				'type' => 'boolean',
				'default' => false
			),
			'perPage' => array(
				'type' => 'number',
				'default' => 12
			)
		),
		'textdomain' => 'botspot-posts',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'products-topic' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ui/products-topic',
		'version' => '0.1.0',
		'title' => 'Products Topic',
		'category' => 'widgets',
		'icon' => 'networking',
		'description' => 'React Products Topic',
		'example' => array(
			
		),
		'attributes' => array(
			'defaultProductName' => array(
				'type' => 'string',
				'default' => 'Momentum'
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'botspot-products-topic',
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
		'icon' => 'columns',
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
		'icon' => 'format-video',
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
		'icon' => 'editor-alignleft',
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
		'icon' => 'editor-textcolor',
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
					'h6',
					'body1',
					'body2',
					'subtitle1',
					'subtitle2',
					'caption',
					'button'
				),
				'default' => 'body1'
			),
			'color' => array(
				'type' => 'string',
				'enum' => array(
					'white',
					'black'
				),
				'default' => 'black'
			),
			'children' => array(
				'type' => 'string',
				'default' => 'Text'
			),
			'mt' => array(
				'type' => 'number',
				'default' => 2
			),
			'mb' => array(
				'type' => 'number',
				'default' => 2
			)
		),
		'textdomain' => 'botspot-typography',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
