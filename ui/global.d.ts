declare module "*.scss";

export type CustomPost = {
	acf?: Partial<CustomFields>;
	yoast_head_json?: DeepPartial<Seo>;
} & WP_REST_API_Post;

export type CustomFields = {
	banner: string;
	closeup: string;

	datasheet: string;
	"demo-video": string;
	"first-animation": string;
	"first-headline": string;

	"first-subline": string;

	"full-name": string;
	picture: string;

	"second-animation": string;
	"second-headline": string;
	"second-subline": string;
	"short-name": string;

	photo_gallery: {
		animation: { full_image_url: string }[];
	};

	post: {
		post_excerpt: string;
		post_name: string;
		post_title: string;
	} & CustomPost;
};
