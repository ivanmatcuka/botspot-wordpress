import { StandaloneGallery as Gallery } from '@botspot/ui/standalone';
import { ComponentProps } from 'react';

import { InnerBlocks } from '@wordpress/block-editor';
import Editor from '../Editor';
import blockConfig from './block.json';
import './editor.scss';

type GalleryProps = ComponentProps<typeof Gallery>;
export default function Edit(props: {
  attributes: GalleryProps;
  setAttributes: (updated: Partial<GalleryProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig.attributes}>
      <Gallery {...props.attributes}>
        <InnerBlocks allowedBlocks={['ui/iframe']} />
      </Gallery>
    </Editor>
  );
}
