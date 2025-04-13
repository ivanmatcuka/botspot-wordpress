import { StandaloneMainBlock as MainBlock } from "@botspot/ui/standalone";
import { ComponentProps } from "react";

import { InnerBlocks } from "@wordpress/block-editor";
import Editor from "../Editor";
import blockConfig from "./block.json";

type MediaBlockProps = ComponentProps<typeof MainBlock>;
export default function Edit(props: {
	attributes: MediaBlockProps;
	setAttributes: (MediaBlockProps: Partial<MediaBlockProps>) => void;
}) {
	return (
		<Editor {...props} blockConfig={blockConfig.attributes}>
			<MainBlock {...props.attributes}>
				<InnerBlocks />
			</MainBlock>
		</Editor>
	);
}
