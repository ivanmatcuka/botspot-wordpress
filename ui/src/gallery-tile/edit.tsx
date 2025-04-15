import { StandaloneGalleryTile as GalleryTile } from '@botspot/ui/standalone';
import { ComponentProps } from 'react';

import { InnerBlocks } from '@wordpress/block-editor';
import Editor from '../Editor';
import blockConfig from './block.json';

type GalleryTileProps = ComponentProps<typeof GalleryTile>;
export default function Edit(props: {
  attributes: GalleryTileProps;
  setAttributes: (updated: Partial<GalleryTileProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig.attributes}>
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
