import { Iframe } from '@botspot/ui';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type IframeProps = ComponentProps<typeof Iframe>;
export default function Edit(props: {
  attributes: IframeProps;
  setAttributes: (updated: Partial<IframeProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <Iframe {...props.attributes} />
    </Editor>
  );
}
