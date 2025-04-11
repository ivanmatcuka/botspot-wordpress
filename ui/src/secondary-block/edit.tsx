import { secondaryBlockStorybookMeta } from "@botspot/ui/storybook";

import { StandaloneSecondaryBlock as SecondaryBlock } from "@botspot/ui/standalone";
import { ComponentProps, useMemo } from "react";
import { Attributes, Root } from "../schema";
import { attributesToProps } from "../utils/attributesToProps";

import Editor from "../Editor";

type MediaBlockProps = ComponentProps<typeof SecondaryBlock>;
export default function Edit(props: {
	attributes: Attributes;
	setAttributes: (updated: Partial<Root>) => void;
}) {
	const componentProps = useMemo(
		() => attributesToProps<MediaBlockProps>(props.attributes),
		[props.attributes],
	);

	return (
		<Editor {...props} attributes={secondaryBlockStorybookMeta}>
			<SecondaryBlock {...componentProps} />
		</Editor>
	);
}
