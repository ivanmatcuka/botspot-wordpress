import { StandaloneMainBlock as MainBlock } from '@botspot/ui/standalone';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import blockConfig from './block.json';

type MediaBlockProps = ComponentProps<typeof MainBlock>;
export default function Edit(props: {
  attributes: MediaBlockProps;
  setAttributes: (MediaBlockProps: Partial<MediaBlockProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig}>
      <MainBlock {...props.attributes}>
        <InnerBlocks
          allowedBlocks={[
            'ui/media-block',
            'ui/typography',
            'ui/button',
            'ui/iframe',
            'ui/skeleton-video',
          ]}
        />
      </MainBlock>
    </Editor>
  );
}
