import { mainBlockStorybookMeta } from "@botspot/ui/storybook";

import { StandaloneMainBlock as MainBlock } from "@botspot/ui/standalone";
import { ComponentProps, useMemo } from "react";
import { Attributes, Root } from "../schema";
import { attributesToProps } from "../utils/attributesToProps";

import Editor from "../Editor";

type MediaBlockProps = ComponentProps<typeof MainBlock>;
export default function Edit(props: {
	attributes: Attributes;
	setAttributes: (updated: Partial<Root>) => void;
}) {
	const componentProps = useMemo(
		() => attributesToProps<MediaBlockProps>(props.attributes),
		[props.attributes],
	);

	return (
		<Editor {...props} attributes={mainBlockStorybookMeta}>
			<MainBlock {...componentProps} />
		</Editor>
	);
}
