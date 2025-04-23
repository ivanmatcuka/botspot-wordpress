import { StandalonePosts as Posts } from '@botspot/ui/standalone';
import { ComponentProps } from 'react';

import Editor from '../Editor';
import { getPosts } from '../service';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type PostsProps = ComponentProps<typeof Posts>;
export default function Edit(props: {
  attributes: PostsProps;
  setAttributes: (props: Partial<PostsProps>) => void;
}) {
  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <Posts {...props.attributes} getPosts={getPosts} />
    </Editor>
  );
}
