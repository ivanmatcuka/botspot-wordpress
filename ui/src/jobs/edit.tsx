import type { WP_REST_API_Post } from 'wp-types';

import { StandaloneJobs as Jobs } from '@botspot/ui/standalone';
import { ComponentProps, useEffect, useState } from 'react';

import Editor from '../Editor';
import { getJobs } from '../service';
import blockConfig from './block.json';

type JobsProps = ComponentProps<typeof Jobs>;
export default function Edit(props: {
  attributes: JobsProps;
  setAttributes: (props: Partial<JobsProps>) => void;
}) {
  const [data, setData] = useState<WP_REST_API_Post[]>();

  useEffect(() => {
    getJobs().then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <Editor {...props} config={{ name: blockConfig.name }}>
      <Jobs jobs={data ?? []} />
    </Editor>
  );
}
