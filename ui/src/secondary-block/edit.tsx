import { StandaloneSecondaryBlock as SecondaryBlock } from '@botspot/ui/standalone';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import blockConfig from './block.json';
import './editor.scss';

type SecondaryBlockProps = ComponentProps<typeof SecondaryBlock>;
export default function Edit(props: {
  attributes: SecondaryBlockProps;
  setAttributes: (updated: Partial<SecondaryBlockProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig}>
      <SecondaryBlock {...props.attributes}>
        <InnerBlocks allowedBlocks={['ui/button']} />
      </SecondaryBlock>
    </Editor>
  );
}
