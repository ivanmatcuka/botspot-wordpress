import {
  StandaloneProductsTopic as ProductsTopic,
  ThemeRegistry,
} from '@botspot/ui';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { getProducts } from '../service';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type ProductsTopicProps = ComponentProps<typeof ProductsTopic>;
export default function Edit(props: {
  attributes: ProductsTopicProps;
  setAttributes: (props: Partial<ProductsTopicProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <ThemeRegistry>
        <ProductsTopic
          {...props.attributes}
          getProducts={getProducts}
          onChange={() => ({})}
        />
      </ThemeRegistry>
    </Editor>
  );
}
