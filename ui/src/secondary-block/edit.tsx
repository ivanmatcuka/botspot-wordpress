import { StandaloneSecondaryBlock as SecondaryBlock } from "@botspot/ui/standalone";
import { ComponentProps } from "react";

import Editor from "../Editor";
import blockConfig from "./block.json";

type MediaBlockProps = ComponentProps<typeof SecondaryBlock>;
export default function Edit(props: {
	attributes: MediaBlockProps;
	setAttributes: (updated: Partial<MediaBlockProps>) => void;
}) {
	return (
		<Editor {...props} blockConfig={blockConfig.attributes}>
			<SecondaryBlock {...props.attributes} />
		</Editor>
	);
}
