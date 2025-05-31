import { CustomPost } from '@botspot/ui';

import { BasePost, Job, Product } from './types';

const requestInit: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getPosts = async (
  page = 1,
  perPage = 12,
): Promise<{ count: number; data: CustomPost[] }> => {
  const response = await fetch(
    `/wp-json/botspot/v1/flat-posts?&per_page=${perPage}&page=${page}&category=3d-academy`,
    requestInit,
  );

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;

    const mapProps = (post: BasePost) => ({
      excerpt: post.flat_excerpt || '',
      featuredImage: post.featured_image || '',
      id: post.id,
      title: post.flat_title || '',
    });

    return { count, data: data.map(mapProps) };
  } catch {
    return { count: 0, data: [] };
  }
};

export const getPeople = async (): Promise<{
  count: number;
  data: BasePost[];
}> => {
  const response = await fetch(
    `/wp-json/botspot/v1/flat-posts?&per_page=100&category=people`,
    requestInit,
  );

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;
    return { count, data };
  } catch {
    return { count: 0, data: [] };
  }
};

export const getJobs = async (): Promise<{
  count: number;
  data: Job[];
}> => {
  const response = await fetch(
    `/wp-json/botspot/v1/flat-posts?&per_page=100&category=jobs`,
    requestInit,
  );

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;
    return { count, data };
  } catch {
    return { count: 0, data: [] };
  }
};

export const getForm = async (formId?: number): Promise<null> => {
  try {
    const response = await fetch(`/wp-json/botspot/v1/forms/${formId}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch {
    return null;
  }
};

export const getProducts = async (): Promise<{
  count: number;
  data: CustomPost[];
}> => {
  const response = await fetch(
    `/wp-json/botspot/v1/flat-posts?&per_page=100&type=product`,
    requestInit,
  );

  if (!response.ok) {
    return { count: 0, data: [] };
  }

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;

    const mapProps = (product: Product) => ({
      excerpt: product.flat_excerpt || '',
      featuredImage: product.featured_image || '',
      id: product.id,
      info: product.info || {},
      slug: product.slug || '',
      title: product.flat_title || '',
    });

    return { count, data: data.map(mapProps) };
  } catch {
    return { count: 0, data: [] };
  }
};
