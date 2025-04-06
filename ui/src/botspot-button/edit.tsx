/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { StandaloneButton as Button } from "@botspot/ui";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import createCache, { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	const [emotionCache, setEmotionCache] = useState<EmotionCache | null>(null);
	const blockProps = useBlockProps();

	useEffect(() => {
		const body = document.getElementsByTagName("body")[0];
		if (!body) return;

		const iframe = body.getElementsByTagName("iframe")[0];

		const element = document.createElement("div");
		element.style.display = "none";
		body.appendChild(element);

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
			{
				<CacheProvider value={emotionCache}>
					<Button variant="primary">Hello from the editor!</Button>
				</CacheProvider>
			}
		</p>
	);
}
