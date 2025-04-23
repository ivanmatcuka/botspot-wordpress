import type { ComponentProps, FC } from 'react';

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
