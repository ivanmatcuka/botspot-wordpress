import { Iframe } from '@botspot/ui';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import blockConfig from './block.json';

type IframeProps = ComponentProps<typeof Iframe>;
export default function Edit(props: {
  attributes: IframeProps;
  setAttributes: (updated: Partial<IframeProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig.attributes}>
      <Iframe {...props.attributes} />
    </Editor>
  );
}
