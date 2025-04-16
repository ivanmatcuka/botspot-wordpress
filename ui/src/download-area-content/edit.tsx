import { StandaloneDownloadAreaContent as DownloadAreaContent } from '@botspot/ui/standalone';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps, useEffect, useState } from 'react';

import Editor from '../Editor';
import { getProducts } from '../utils';
import blockConfig from './block.json';

type DownloadAreaContentProps = ComponentProps<typeof DownloadAreaContent>;
export default function Edit(props: {
  attributes: DownloadAreaContentProps;
  setAttributes: (props: Partial<DownloadAreaContentProps>) => void;
}) {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    getProducts().then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <Editor {...props} blockConfig={{ name: blockConfig.name }}>
      <DownloadAreaContent {...props.attributes} products={data ?? []}>
        <InnerBlocks allowedBlocks={['ui/products-topic', 'ui/typography']} />
      </DownloadAreaContent>
    </Editor>
  );
}
