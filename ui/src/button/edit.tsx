import { Button } from '@botspot/ui';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type ButtonProps = ComponentProps<typeof Button>;
export default function Edit(props: {
  attributes: ButtonProps;
  setAttributes: (updated: Partial<ButtonProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <Button {...props.attributes} onClick={(e) => e.preventDefault()} />
    </Editor>
  );
}
