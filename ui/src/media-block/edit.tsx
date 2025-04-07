import { MediaBlock, mediaBlockStorybookMeta } from "@botspot/ui";
import createCache, { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { ComponentProps, useEffect, useMemo, useState } from "react";
import { DynamicBlockSettingsPanel } from "../InspectorPanel";
import { Attributes, Root } from "../schema";
import { attributesToProps } from "../utils/attributesToProps";
import { storybookToBlockAttributes } from "../utils/storybookToBlockAttributes";

type MediaBlockProps = ComponentProps<typeof MediaBlock>;
export default function Edit({
	attributes,
	setAttributes,
}: {
	attributes: Attributes;
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

	const blockConfig = useMemo(
		() => storybookToBlockAttributes(mediaBlockStorybookMeta),
		[],
	);

	const props = useMemo(
		() => attributesToProps<MediaBlockProps>(attributes),
		[attributes],
	);

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
			{
				<CacheProvider value={emotionCache}>
					<MediaBlock {...props} />
				</CacheProvider>
			}
		</p>
	);
}
