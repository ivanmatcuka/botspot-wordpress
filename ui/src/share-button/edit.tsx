import { StandaloneButton as Button } from '@botspot/ui/standalone';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type ShareButtonProps = ComponentProps<typeof Button>;
export default function Edit(props: {
  attributes: ShareButtonProps;
  setAttributes: (updated: Partial<ShareButtonProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <Button {...props.attributes} onClick={(e) => e.preventDefault()} />
    </Editor>
  );
}
