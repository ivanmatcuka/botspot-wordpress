import { PartnerLogo } from '@botspot/ui';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type PartnerLogoProps = ComponentProps<typeof PartnerLogo>;
export default function Edit(props: {
  attributes: PartnerLogoProps;
  setAttributes: (updated: Partial<PartnerLogoProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <PartnerLogo {...props.attributes} />
    </Editor>
  );
}
