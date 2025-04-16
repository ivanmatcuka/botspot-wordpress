import { StandaloneDynamicForm as DynamicForm } from '@botspot/ui/standalone';
import { InnerBlocks } from '@wordpress/block-editor';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import blockConfig from './block.json';

type DynamicFormProps = ComponentProps<typeof DynamicForm>;
export default function Edit(props: {
  attributes: DynamicFormProps;
  setAttributes: (updated: Partial<DynamicFormProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig}>
      <DynamicForm {...props.attributes}>
        <InnerBlocks allowedBlocks={['ui/products-topic', 'ui/typography']} />
      </DynamicForm>
    </Editor>
  );
}
