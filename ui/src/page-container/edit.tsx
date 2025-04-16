import { StandalonePageContainer as PageContainer } from '@botspot/ui/standalone';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import blockConfig from './block.json';

type PageContainerProps = ComponentProps<typeof PageContainer>;
export default function Edit(props: {
  attributes: PageContainerProps;
  setAttributes: (updated: Partial<PageContainerProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig}>
      <PageContainer {...props.attributes}>
        <InnerBlocks />
      </PageContainer>
    </Editor>
  );
}
