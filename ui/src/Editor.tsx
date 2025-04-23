import createCache, { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { useRefEffect } from '@wordpress/compose';
import '@botspot/ui/dist/ui.css';
import { ReactNode, useEffect, useState } from 'react';

import { DynamicBlockSettingsPanel } from './InspectorPanel';
import { BlockMetadata, GenericComponentProps } from './types';

export default function Editor<A extends GenericComponentProps>({
  attributes,
  children,
  config,
  setAttributes,
}: {
  attributes: A;
  children: ReactNode;
  config: BlockMetadata;
  setAttributes: (updated: Partial<A>) => void;
}) {
  const [emotionCache, setEmotionCache] = useState<EmotionCache | null>();
  const [ownerDocument, setOwnerDocument] = useState<Document | null>(null);
  const ref = useRefEffect(
    (element) => {
      const { ownerDocument } = element;
      setOwnerDocument(ownerDocument);
    },
    [config],
  );
  const blockProps = useBlockProps({ ref });

  useEffect(() => {
    setEmotionCache(
      createCache({
        container: ownerDocument?.head,
        key: 'css',
        speedy: false,
      }),
    );
  }, [ownerDocument]);

  return (
    <p {...blockProps}>
      <div id={`emotion-root-${config.name}`}>
        {config.attributes && !!Object.keys(config.attributes).length && (
          <InspectorControls>
            <DynamicBlockSettingsPanel
              attributes={attributes}
              configAttributes={config.attributes}
              setAttributes={setAttributes}
            />
          </InspectorControls>
        )}
        {!!emotionCache && (
          <CacheProvider value={emotionCache}>{children}</CacheProvider>
        )}
      </div>
    </p>
  );
}
