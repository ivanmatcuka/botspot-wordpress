import { Banner } from '@botspot/ui';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import './editor.scss';
import blockConfig from './block.json';

type BannerProps = ComponentProps<typeof Banner>;
export default function Edit(props: {
  attributes: BannerProps;
  setAttributes: (updated: Partial<BannerProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <Banner {...props.attributes}>
        <InnerBlocks allowedBlocks={['ui/button']} orientation="horizontal" />
      </Banner>
    </Editor>
  );
}
