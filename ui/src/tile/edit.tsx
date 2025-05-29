import { Tile } from '@botspot/ui';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type TileProps = ComponentProps<typeof Tile>;
export default function Edit(props: {
  attributes: TileProps;
  setAttributes: (updated: Partial<TileProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <Tile {...props.attributes}>
        <InnerBlocks />
      </Tile>
    </Editor>
  );
}
