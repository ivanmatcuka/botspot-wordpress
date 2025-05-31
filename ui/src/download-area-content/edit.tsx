import { DownloadAreaContent } from '@botspot/ui';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps, useEffect, useState } from 'react';

import Editor from '../Editor';
import { getForm, getProducts } from '../service';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type DownloadAreaContentProps = ComponentProps<typeof DownloadAreaContent>;
export default function Edit(props: {
  attributes: DownloadAreaContentProps;
  setAttributes: (props: Partial<DownloadAreaContentProps>) => void;
}) {
  const [data, setData] = useState<DownloadAreaContentProps['products']>([]);

  useEffect(() => {
    getProducts().then(({ data }) => setData(data));
  }, []);

  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <DownloadAreaContent
        {...props.attributes}
        getForm={getForm}
        products={data}
      >
        <InnerBlocks allowedBlocks={['ui/products-topic', 'ui/typography']} />
      </DownloadAreaContent>
    </Editor>
  );
}
