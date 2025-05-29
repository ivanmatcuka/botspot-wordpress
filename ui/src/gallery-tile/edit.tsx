import { GalleryTile } from '@botspot/ui';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type GalleryTileProps = ComponentProps<typeof GalleryTile>;
export default function Edit(props: {
  attributes: GalleryTileProps;
  setAttributes: (updated: Partial<GalleryTileProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <GalleryTile {...props.attributes}>
        <InnerBlocks
          allowedBlocks={[
            'ui/iframe',
            'ui/typography',
            'ui/button',
            'ui/media-block',
            'ui/skeleton-video',
          ]}
        />
      </GalleryTile>
    </Editor>
  );
}
