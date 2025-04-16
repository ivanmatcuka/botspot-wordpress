import { PartnerLogo } from '@botspot/ui';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import blockConfig from './block.json';

type PartnerLogoProps = ComponentProps<typeof PartnerLogo>;
export default function Edit(props: {
  attributes: PartnerLogoProps;
  setAttributes: (updated: Partial<PartnerLogoProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig}>
      <PartnerLogo {...props.attributes} />
    </Editor>
  );
}
