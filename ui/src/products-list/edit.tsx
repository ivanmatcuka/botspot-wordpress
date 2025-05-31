import { ProductsList } from '@botspot/ui';
import { ComponentProps, useEffect, useState } from 'react';

import Editor from '../Editor';
import { getProducts } from '../service';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type ProductsListProps = ComponentProps<typeof ProductsList>;
export default function Edit(props: {
  attributes: ProductsListProps;
  setAttributes: (props: Partial<ProductsListProps>) => void;
}) {
  const [data, setData] = useState<ProductsListProps['products']>([]);

  useEffect(() => {
    getProducts().then(({ data }) => setData(data));
  }, []);

  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <ProductsList {...props.attributes} products={data} />
    </Editor>
  );
}
