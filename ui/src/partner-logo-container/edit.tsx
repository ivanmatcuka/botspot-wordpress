import { PartnerLogoContainer } from '@botspot/ui';
import { InnerBlocks } from '@wordpress/block-editor';
import Editor from '../Editor';

export default function Edit(props: {
  attributes: {};
  setAttributes: (props: Partial<{}>) => void;
}) {
  return (
    <Editor {...props} blockConfig={{}}>
      <PartnerLogoContainer>
        <InnerBlocks allowedBlocks={['ui/partner-logo']} />
      </PartnerLogoContainer>
    </Editor>
  );
}
