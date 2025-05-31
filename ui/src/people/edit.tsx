import { People } from '@botspot/ui';
import { ComponentProps, useEffect, useState } from 'react';

import Editor from '../Editor';
import { getPeople } from '../service';
import { Person } from '../types';
import blockConfig from './block.json';

const mapProps = (person: Person) => ({
  excerpt: person.flat_excerpt || '',
  featuredImage: person.featured_image || '',
  id: person.id,
  title: person.flat_title || '',
});

type PeopleProps = ComponentProps<typeof People>;
export default function Edit(props: {
  attributes: PeopleProps;
  setAttributes: (props: Partial<PeopleProps>) => void;
}) {
  const [data, setData] = useState<PeopleProps['people']>();

  useEffect(() => {
    getPeople().then(({ data }) => setData(data.map(mapProps)));
  }, []);

  return (
    <Editor {...props} config={{ name: blockConfig.name }}>
      <People {...props.attributes} people={data ?? []} />
    </Editor>
  );
}
