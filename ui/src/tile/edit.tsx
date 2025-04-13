import { StandaloneTile as Tile } from "@botspot/ui/standalone";
import { ComponentProps } from "react";

import { InnerBlocks } from "@wordpress/block-editor";

import Editor from "../Editor";
import blockConfig from "./block.json";

type TileProps = ComponentProps<typeof Tile>;
export default function Edit(props: {
	attributes: TileProps;
	setAttributes: (updated: Partial<TileProps>) => void;
}) {
	return (
		<Editor {...props} blockConfig={blockConfig.attributes}>
			<Tile {...props.attributes}>
				<InnerBlocks />
			</Tile>
		</Editor>
	);
}
