import { ThemeRegistry, Typography } from "@botspot/ui";

import { ComponentProps } from "react";
import blockConfig from "./block.json";

import Editor from "../Editor";

type TypographyProps = ComponentProps<typeof Typography>;
export default function Edit(props: {
	attributes: TypographyProps;
	setAttributes: (updated: Partial<TypographyProps>) => void;
}) {
	return (
		<Editor {...props} blockConfig={blockConfig.attributes}>
			<ThemeRegistry>
				<Typography {...props.attributes} />
			</ThemeRegistry>
		</Editor>
	);
}
