import { SecondaryBlock } from '@botspot/ui';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import './editor.scss';
import blockConfig from './block.json';

type SecondaryBlockProps = ComponentProps<typeof SecondaryBlock>;
export default function Edit(props: {
  attributes: SecondaryBlockProps;
  setAttributes: (updated: Partial<SecondaryBlockProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <SecondaryBlock {...props.attributes}>
        <InnerBlocks allowedBlocks={['ui/button']} />
      </SecondaryBlock>
    </Editor>
  );
}
