import { StandaloneSkeletonVideo as SkeletonVideo } from '@botspot/ui/standalone';

import { ComponentProps } from 'react';

import Editor from '../Editor';
import blockConfig from './block.json';

type SkeletonVideoProps = ComponentProps<typeof SkeletonVideo>;
export default function Edit(props: {
  attributes: SkeletonVideoProps;
  setAttributes: (updated: Partial<SkeletonVideoProps>) => void;
}) {
  return (
    <Editor {...props} blockConfig={blockConfig.attributes}>
      <SkeletonVideo {...props.attributes} />
    </Editor>
  );
}
