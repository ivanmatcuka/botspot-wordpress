import { StandaloneButton as Button } from "@botspot/ui/standalone";
import { buttonStorybookMeta } from "@botspot/ui/storybook";

import { ComponentProps, useMemo } from "react";
import { Attributes, Root } from "../schema";
import { attributesToProps } from "../utils/attributesToProps";

import Editor from "../Editor";

type ButtonProps = ComponentProps<typeof Button>;
export default function Edit(props: {
	attributes: Attributes;
	setAttributes: (updated: Partial<Root>) => void;
}) {
	const componentProps = useMemo(
		() => attributesToProps<ButtonProps>(props.attributes),
		[props.attributes],
	);

	return (
		<Editor {...props} attributes={buttonStorybookMeta}>
			<Button {...componentProps} onClick={(e) => e.preventDefault()} />
		</Editor>
	);
}
