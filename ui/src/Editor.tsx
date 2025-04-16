import createCache, { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { useRefEffect } from '@wordpress/compose';
import '@botspot/ui/dist/ui.css';
import { ReactNode, useEffect, useState } from 'react';

import { DynamicBlockSettingsPanel } from './InspectorPanel';

export default function Editor<
  P extends Record<string, any>,
  C extends { attributes?: Record<string, any>; name: string },
>({
  attributes,
  blockConfig,
  children,
  setAttributes,
}: {
  attributes: P;
  blockConfig: C;
  children: ReactNode;
  setAttributes: (updated: Partial<P>) => void;
}) {
  const [emotionCache, setEmotionCache] = useState<EmotionCache | null>();
  const [ownerDocument, setOwnerDocument] = useState<Document | null>(null);
  const ref = useRefEffect(
    (element) => {
      const { ownerDocument } = element;
      setOwnerDocument(ownerDocument);
    },
    [blockConfig],
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
      <div id={`emotion-root-${blockConfig?.name}`}>
        {!!Object.keys(attributes).length && (
          <InspectorControls>
            <DynamicBlockSettingsPanel
              attributes={attributes}
              config={blockConfig?.attributes ?? {}}
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
