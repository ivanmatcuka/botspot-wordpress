import { StandaloneDownloadAreaContent as DownloadAreaContent } from '@botspot/ui/standalone';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps, useEffect, useState } from 'react';
import { WP_REST_API_Post } from 'wp-types';

import Editor from '../Editor';
import { getProducts } from '../service';
import blockConfig from './block.json';

type DownloadAreaContentProps = ComponentProps<typeof DownloadAreaContent>;
export default function Edit(props: {
  attributes: DownloadAreaContentProps;
  setAttributes: (props: Partial<DownloadAreaContentProps>) => void;
}) {
  const [data, setData] = useState<WP_REST_API_Post[]>();

  useEffect(() => {
    getProducts().then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <Editor {...props} config={{ name: blockConfig.name }}>
      <DownloadAreaContent {...props.attributes} products={data ?? []}>
        <InnerBlocks allowedBlocks={['ui/products-topic', 'ui/typography']} />
      </DownloadAreaContent>
    </Editor>
  );
}
