import { ComponentProps } from 'react';

import {
  getProductsFunction,
  StandaloneProductsTopic as ProductsTopic,
  ThemeRegistry,
} from '@botspot/ui';
import Editor from '../Editor';
import blockConfig from './block.json';

type ProductsTopicProps = ComponentProps<typeof ProductsTopic>;
export default function Edit(props: {
  attributes: ProductsTopicProps;
  setAttributes: (props: Partial<ProductsTopicProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig.attributes}>
      <ThemeRegistry>
        <ProductsTopic
          {...props.attributes}
          onChange={() => ({})}
          getProducts={getProductsFunction('')}
        />
      </ThemeRegistry>
    </Editor>
  );
}
