import { iframeBlockStorybookMeta } from "@botspot/ui/storybook";

import { Iframe } from "@botspot/ui";
import { ComponentProps, useMemo } from "react";
import { Attributes, Root } from "../schema";
import { attributesToProps } from "../utils/attributesToProps";

import Editor from "../Editor";

type IframeProps = ComponentProps<typeof Iframe>;
export default function Edit(props: {
	attributes: Attributes;
	setAttributes: (updated: Partial<Root>) => void;
}) {
	const componentProps = useMemo(
		() => attributesToProps<IframeProps>(props.attributes),
		[props.attributes],
	);

	return (
		<Editor {...props} attributes={iframeBlockStorybookMeta}>
			<Iframe {...componentProps} />
		</Editor>
	);
}
