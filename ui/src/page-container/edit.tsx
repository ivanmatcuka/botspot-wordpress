import { PageContainer } from '@botspot/ui';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type PageContainerProps = ComponentProps<typeof PageContainer>;
export default function Edit(props: {
  attributes: PageContainerProps;
  setAttributes: (updated: Partial<PageContainerProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <PageContainer {...props.attributes}>
        <InnerBlocks />
      </PageContainer>
    </Editor>
  );
}
