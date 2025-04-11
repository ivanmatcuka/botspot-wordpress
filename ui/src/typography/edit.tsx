import { ThemeRegistry, Typography } from "@botspot/ui";
import { buttonStorybookMeta } from "@botspot/ui/storybook";

import { ComponentProps, useMemo } from "react";
import { Attributes, Root } from "../schema";
import { attributesToProps } from "../utils/attributesToProps";

import Editor from "../Editor";

type TypographyProps = ComponentProps<typeof Typography>;
export default function Edit(props: {
	attributes: Attributes;
	setAttributes: (updated: Partial<Root>) => void;
}) {
	const componentProps = useMemo(
		() => attributesToProps<TypographyProps>(props.attributes),
		[props.attributes],
	);

	return (
		<Editor {...props} attributes={buttonStorybookMeta}>
			<ThemeRegistry>
				<Typography {...componentProps} />
			</ThemeRegistry>
		</Editor>
	);
}
