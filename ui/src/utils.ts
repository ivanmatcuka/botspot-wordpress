const baseUrl = "/wp-json/wp/v2";

const requestInit: RequestInit = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
};

export const getPosts = async (
	page = 1,
	perPage = 12,
): Promise<{ count: number; data: any[] }> => {
	const category = await getCategory("3d-academy");
	if (!category) return { count: 0, data: [] };

	const response = await fetch(
		`${baseUrl}/posts?&orderby=modified&per_page=${perPage}&page=${page}&categories=${category.id}&_embed`,
		requestInit,
	);

	try {
		const data = await response.json();
		const count = Number(response.headers.get("X-WP-TotalPages")) ?? 1;
		return { count, data };
	} catch {
		return { count: 0, data: [] };
	}
};

export const getPeople = async (): Promise<{
	count: number;
	data: any[];
}> => {
	const category = await getCategory("people");
	if (!category) return { count: 0, data: [] };

	const response = await fetch(
		`${baseUrl}/posts?&categories=${category.id}&per_page=100&_embed`,
		requestInit,
	);

	try {
		const data = await response.json();
		const count = Number(response.headers.get("X-WP-TotalPages")) ?? 1;
		return { count, data };
	} catch {
		return { count: 0, data: [] };
	}
};

export const getProducts = async (): Promise<{
	count: number;
	data: any[];
}> => {
	const response = await fetch(
		`${baseUrl}/product?&per_page=100&acf_format=standard`,
		requestInit,
	);

	try {
		const data = await response.json();
		const count = Number(response.headers.get("X-WP-TotalPages")) ?? 1;

		if (data?.data?.status) {
			return { count: 0, data: [] };
		}

		return { count, data };
	} catch {
		return { count: 0, data: [] };
	}
};

export const getJobs = async (): Promise<{
	count: number;
	data: any[];
}> => {
	const category = await getCategory("jobs");
	if (!category) return { count: 0, data: [] };

	const response = await fetch(
		`${baseUrl}/posts?&categories=${category.id}&per_page=100&_embed`,
		requestInit,
	);

	try {
		const data = await response.json();
		const count = Number(response.headers.get("X-WP-TotalPages")) ?? 1;
		return { count, data };
	} catch {
		return { count: 0, data: [] };
	}
};

export const getCategory = async (slug: string): Promise<any | null> => {
	const response = await fetch(
		`${baseUrl}/categories?slug=${slug}`,
		requestInit,
	);

	try {
		const data = await response.json();
		return data[0];
	} catch (error) {
		return null;
	}
};

import { WP_REST_API_Attachment } from "wp-types";
import { CustomPost } from "../global";
interface Sizes {
	[size: string]: {
		source_url: string;
	};
}
export const getFeaturedImageUrl = (post?: CustomPost) => {
	return (
		(
			(post?._embedded?.["wp:featuredmedia"]?.[0] as WP_REST_API_Attachment)
				?.media_details?.sizes as Sizes
		)?.large?.source_url ?? "/img/banners/innovation-lab.png"
	);
};
