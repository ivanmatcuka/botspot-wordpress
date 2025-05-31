import { Jobs } from '@botspot/ui';
import { ComponentProps, useEffect, useState } from 'react';

import Editor from '../Editor';
import { getJobs } from '../service';
import { Job } from '../types';
import blockConfig from './block.json';

const mapProps = (job: Job) => ({
  excerpt: job.flat_excerpt || '',
  id: job.id,
  title: job.flat_title || '',
});

type JobsProps = ComponentProps<typeof Jobs>;
export default function Edit(props: {
  attributes: JobsProps;
  setAttributes: (props: Partial<JobsProps>) => void;
}) {
  const [data, setData] = useState<JobsProps['jobs']>();

  useEffect(() => {
    getJobs().then(({ data }) => setData(data.map(mapProps)));
  }, []);

  return (
    <Editor {...props} config={{ name: blockConfig.name }}>
      <Jobs jobs={data ?? []} />
    </Editor>
  );
}
