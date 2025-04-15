import createCache, { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { ReactNode, useEffect, useState } from 'react';

import { DynamicBlockSettingsPanel } from './InspectorPanel';
import './tailwind.scss';

export default function Editor<
  P extends Record<string, any>,
  C extends Record<string, any>,
>({
  attributes,
  children,
  blockConfig,
  setAttributes,
}: {
  attributes: P;
  children: ReactNode;
  blockConfig: C;
  setAttributes: (updated: Partial<P>) => void;
}) {
  const [emotionCache, setEmotionCache] = useState<EmotionCache | null>();
  const blockProps = useBlockProps();

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    const iframe = body?.getElementsByTagName('iframe')[0];

    if (!iframe) return;

    setEmotionCache(
      createCache({
        key: 'css',
        container: iframe.contentDocument?.head,
        prepend: true,
        speedy: false,
      }),
    );
  }, []);

  if (!emotionCache) return;

  return (
    <p {...blockProps}>
      {!!Object.keys(attributes).length && (
        <InspectorControls>
          <DynamicBlockSettingsPanel
            attributes={attributes}
            setAttributes={setAttributes}
            config={blockConfig}
          />
        </InspectorControls>
      )}
      {<CacheProvider value={emotionCache}>{children}</CacheProvider>}
    </p>
  );
}
