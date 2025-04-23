import { StandaloneSkeletonVideo as SkeletonVideo } from '@botspot/ui/standalone';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type SkeletonVideoProps = ComponentProps<typeof SkeletonVideo>;
export default function Edit(props: {
  attributes: SkeletonVideoProps;
  setAttributes: (updated: Partial<SkeletonVideoProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <SkeletonVideo {...props.attributes} />
    </Editor>
  );
}
