import {
  getProductsFunction,
  StandaloneProductsTopic as ProductsTopic,
  ThemeRegistry,
} from '@botspot/ui';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import blockConfig from './block.json';

type ProductsTopicProps = ComponentProps<typeof ProductsTopic>;
export default function Edit(props: {
  attributes: ProductsTopicProps;
  setAttributes: (props: Partial<ProductsTopicProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig}>
      <ThemeRegistry>
        <ProductsTopic
          {...props.attributes}
          getProducts={getProductsFunction('')}
          onChange={() => ({})}
        />
      </ThemeRegistry>
    </Editor>
  );
}
