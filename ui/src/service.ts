import { ApiResponse, CustomPost } from '@botspot/ui';

const baseUrl = '/wp-json/wp/v2';
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
  const category = await getCategory('3d-academy');
  if (!category) return { count: 0, data: [] };

  const response = await fetch(
    `${baseUrl}/posts?&orderby=modified&per_page=${perPage}&page=${page}&categories=${category.id}&_embed`,
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

export const getPeople = async (): Promise<{
  count: number;
  data: CustomPost[];
}> => {
  const category = await getCategory('people');
  if (!category) return { count: 0, data: [] };

  const response = await fetch(
    `${baseUrl}/posts?&categories=${category.id}&per_page=100&_embed`,
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
  data: CustomPost[];
}> => {
  const category = await getCategory('jobs');
  if (!category) return { count: 0, data: [] };

  const response = await fetch(
    `${baseUrl}/posts?&categories=${category.id}&per_page=100&_embed`,
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

export const getCategory = async (slug: string): Promise<CustomPost | null> => {
  const response = await fetch(
    `${baseUrl}/categories?slug=${slug}`,
    requestInit,
  );

  try {
    const data = await response.json();
    return data[0];
  } catch {
    return null;
  }
};

export const getForm = async (formId?: number): Promise<ApiResponse | null> => {
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
    `${baseUrl}/product?&per_page=100&acf_format=standard`,
    requestInit,
  );

  if (!response.ok) {
    return { count: 0, data: [] };
  }

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;

    return { count, data };
  } catch {
    return { count: 0, data: [] };
  }
};
