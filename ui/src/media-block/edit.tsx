import { MediaBlock } from '@botspot/ui';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type MediaBlockProps = ComponentProps<typeof MediaBlock>;
export default function Edit(props: {
  attributes: MediaBlockProps;
  setAttributes: (updated: Partial<MediaBlockProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <MediaBlock {...props.attributes} />
    </Editor>
  );
}
