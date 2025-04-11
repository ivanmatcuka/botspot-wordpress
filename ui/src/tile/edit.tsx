import { tileStorybookMeta } from "@botspot/ui/storybook";

import { StandaloneTile as Tile } from "@botspot/ui/standalone";
import { ComponentProps, useMemo } from "react";
import { Attributes, Root } from "../schema";
import { attributesToProps } from "../utils/attributesToProps";

import { InnerBlocks } from "@wordpress/block-editor";
import Editor from "../Editor";

type TileProps = ComponentProps<typeof Tile>;
export default function Edit(props: {
	attributes: Attributes;
	setAttributes: (updated: Partial<Root>) => void;
}) {
	const componentProps = useMemo(
		() => attributesToProps<TileProps>(props.attributes),
		[props.attributes],
	);

	return (
		<Editor {...props} attributes={tileStorybookMeta}>
			<Tile {...componentProps}>
				<InnerBlocks />
			</Tile>
		</Editor>
	);
}
