import { ThemeRegistry, Typography } from '@botspot/ui';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import blockConfig from './block.json';

type TypographyProps = ComponentProps<typeof Typography>;
export default function Edit(props: {
  attributes: TypographyProps;
  setAttributes: (updated: Partial<TypographyProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig}>
      <ThemeRegistry>
        <Typography {...props.attributes} />
      </ThemeRegistry>
    </Editor>
  );
}
