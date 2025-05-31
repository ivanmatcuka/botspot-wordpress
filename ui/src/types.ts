import type { ComponentProps, FC } from 'react';

import { CustomFields } from '@botspot/ui';

export type BlockAttribute = {
  attribute?: string;
  default?: unknown;
  description?: string;
  enum?: string[];
  name: string;
  selector?: string;
  source?: 'html' | 'attribute' | 'text' | 'meta';
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
};

type BlockExample = {
  attributes: GenericComponentProps;
};

type BlockSupportsColor = {
  background?: boolean;
  link?: boolean;
  text?: boolean;
};

type BlockSupports = {
  color?: BlockSupportsColor;
};

type BlockIcon = {
  background?: string;
  foreground?: string;
  src: string;
};

export type BlockMetadata = {
  $schema?: string;
  apiVersion?: number;
  category?: 'string';
  description?: string;
  editorScript?: string | string[];
  editorStyle?: string | string[];
  example?: BlockExample;
  hidden?: boolean;
  icon?: string | BlockIcon;
  keywords?: string[];
  name: string;

  render?: string;

  script?: string | string[];

  style?: string | string[];
  supports?: BlockSupports;
  textdomain?: string;
  title?: string;
  version?: string;

  viewScript?: string | string[];

  attributes?: {
    [key: string]: BlockAttribute;
  };
};

export type GenericComponentProps = Record<
  string,
  ComponentProps<FC> | undefined | null
>;

export type BasePost = {
  content?: string;
  featured_image?: string;
  flat_excerpt?: string;
  flat_title?: string;
  id: number;
  slug?: string;
};

export type Job = Pick<BasePost, 'id' | 'flat_title' | 'flat_excerpt'>;
export type Person = Pick<
  BasePost,
  'id' | 'flat_title' | 'flat_excerpt' | 'slug' | 'featured_image'
>;
export type Product = {
  info?: CustomFields;
} & BasePost;
