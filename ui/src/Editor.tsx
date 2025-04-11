import createCache, { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { ReactNode, useEffect, useState } from "react";

import { DynamicBlockSettingsPanel } from "./InspectorPanel";
import { Attributes, Root } from "./schema";
import "./tailwind.scss";

export default function Editor({
	attributes,
	children,
	blockConfig,
	setAttributes,
}: {
	attributes: Attributes;
	children: ReactNode;
	blockConfig: Attributes;
	setAttributes: (updated: Partial<Root>) => void;
}) {
	const [emotionCache, setEmotionCache] = useState<EmotionCache | null>();
	const blockProps = useBlockProps();

	useEffect(() => {
		const body = document.getElementsByTagName("body")[0];
		const iframe = body?.getElementsByTagName("iframe")[0];

		if (!iframe) return;

		setEmotionCache(
			createCache({
				key: "css",
				container: iframe.contentDocument?.head,
				prepend: true,
				speedy: false,
			}),
		);
	}, []);

	if (!emotionCache) return;

	return (
		<p {...blockProps}>
			<InspectorControls>
				<DynamicBlockSettingsPanel<typeof attributes>
					attributes={attributes}
					setAttributes={setAttributes}
					config={blockConfig}
				/>
			</InspectorControls>
			{<CacheProvider value={emotionCache}>{children}</CacheProvider>}
		</p>
	);
}
