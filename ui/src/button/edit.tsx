import { StandaloneButton as Button } from '@botspot/ui/standalone';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import blockConfig from './block.json';

type ButtonProps = ComponentProps<typeof Button>;
export default function Edit(props: {
  attributes: ButtonProps;
  setAttributes: (updated: Partial<ButtonProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig}>
      <Button {...props.attributes} onClick={(e) => e.preventDefault()} />
    </Editor>
  );
}
