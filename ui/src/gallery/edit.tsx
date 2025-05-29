import { Gallery } from '@botspot/ui';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import './editor.scss';
import blockConfig from './block.json';

type GalleryProps = ComponentProps<typeof Gallery>;
export default function Edit(props: {
  attributes: GalleryProps;
  setAttributes: (updated: Partial<GalleryProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <Gallery {...props.attributes}>
        <InnerBlocks allowedBlocks={['ui/iframe']} />
      </Gallery>
    </Editor>
  );
}
