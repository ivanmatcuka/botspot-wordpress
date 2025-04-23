import { ThemeRegistry, Typography } from '@botspot/ui';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type TypographyProps = ComponentProps<typeof Typography>;
export default function Edit(props: {
  attributes: TypographyProps;
  setAttributes: (updated: Partial<TypographyProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <ThemeRegistry>
        <Typography {...props.attributes} />
      </ThemeRegistry>
    </Editor>
  );
}
