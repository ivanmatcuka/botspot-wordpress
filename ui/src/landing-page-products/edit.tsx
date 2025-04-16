import type { WP_REST_API_Post } from 'wp-types';

import { LandingPageProducts, ThemeRegistry } from '@botspot/ui';
import { ComponentProps, useEffect, useState } from 'react';

import Editor from '../Editor';
import { getProducts } from '../utils';
import blockConfig from './block.json';

type LandingPageProductsProps = ComponentProps<typeof LandingPageProducts>;
export default function Edit(props: {
  attributes: LandingPageProductsProps;
  setAttributes: (props: Partial<LandingPageProductsProps>) => void;
}) {
  const [data, setData] = useState<WP_REST_API_Post[]>();

  useEffect(() => {
    getProducts().then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <Editor {...props} blockConfig={{ name: blockConfig.name }}>
      <ThemeRegistry>
        <LandingPageProducts products={data ?? []} />
      </ThemeRegistry>
    </Editor>
  );
}
