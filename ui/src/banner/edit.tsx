import { StandaloneBanner as Banner } from '@botspot/ui/standalone';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import blockConfig from './block.json';
import './editor.scss';

type BannerProps = ComponentProps<typeof Banner>;
export default function Edit(props: {
  attributes: BannerProps;
  setAttributes: (updated: Partial<BannerProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig.attributes}>
      <Banner {...props.attributes}>
        <InnerBlocks orientation="horizontal" allowedBlocks={['ui/button']} />
      </Banner>
    </Editor>
  );
}
