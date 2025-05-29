import { CustomPost } from '@botspot/ui';
import { People } from '@botspot/ui';
import { ComponentProps, useEffect, useState } from 'react';

import Editor from '../Editor';
import { getPeople } from '../service';
import blockConfig from './block.json';

type PeopleProps = ComponentProps<typeof People>;
export default function Edit(props: {
  attributes: PeopleProps;
  setAttributes: (props: Partial<PeopleProps>) => void;
}) {
  const [data, setData] = useState<CustomPost[]>();

  useEffect(() => {
    getPeople().then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <Editor {...props} config={{ name: blockConfig.name }}>
      <People {...props.attributes} people={props.attributes.people ?? data} />
    </Editor>
  );
}
