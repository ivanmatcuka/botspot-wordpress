import { StandaloneMediaBlock as MediaBlock } from "@botspot/ui/standalone";
import { mediaBlockStorybookMeta } from "@botspot/ui/storybook";

import { ComponentProps, useMemo } from "react";

import { Attributes, Root } from "../schema";
import { attributesToProps } from "../utils/attributesToProps";

import Editor from "../Editor";

type MediaBlockProps = ComponentProps<typeof MediaBlock>;
export default function Edit(props: {
	attributes: Attributes;
	setAttributes: (updated: Partial<Root>) => void;
}) {
	const componentProps = useMemo(
		() => attributesToProps<MediaBlockProps>(props.attributes),
		[props.attributes],
	);

	return (
		<Editor {...props} attributes={mediaBlockStorybookMeta}>
			<MediaBlock {...componentProps} />
		</Editor>
	);
}
