import { StandalonePeople as People } from '@botspot/ui/standalone';
import { ComponentProps, useEffect, useState } from 'react';

import Editor from '../Editor';
import { getPeople } from '../utils';
import blockConfig from './block.json';

type PeopleProps = ComponentProps<typeof People>;
export default function Edit(props: {
  attributes: PeopleProps;
  setAttributes: (props: Partial<PeopleProps>) => void;
}) {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    getPeople().then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <Editor {...props} blockConfig={{ name: blockConfig.name }}>
      <People {...props.attributes} people={props.attributes.people ?? data} />
    </Editor>
  );
}
