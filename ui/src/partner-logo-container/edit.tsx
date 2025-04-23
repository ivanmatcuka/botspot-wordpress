import { PartnerLogoContainer } from '@botspot/ui';
import { InnerBlocks } from '@wordpress/block-editor';

import Editor from '../Editor';
import './editor.scss';
import { GenericComponentProps } from '../types';

export default function Edit(props: {
  attributes: GenericComponentProps;
  setAttributes: (props: Partial<GenericComponentProps>) => void;
}) {
  return (
    <Editor {...props} config={{ name: 'partner-logo-container' }}>
      <PartnerLogoContainer>
        <InnerBlocks allowedBlocks={['ui/partner-logo']} />
      </PartnerLogoContainer>
    </Editor>
  );
}
