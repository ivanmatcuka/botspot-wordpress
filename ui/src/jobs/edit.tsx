import { Jobs } from '@botspot/ui';
import { ComponentProps, useEffect, useState } from 'react';

import Editor from '../Editor';
import { getJobs } from '../service';
import blockConfig from './block.json';

type JobsProps = ComponentProps<typeof Jobs>;
export default function Edit(props: {
  attributes: JobsProps;
  setAttributes: (props: Partial<JobsProps>) => void;
}) {
  const [data, setData] = useState<JobsProps['jobs']>();

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
