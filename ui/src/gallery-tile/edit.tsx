import { galleryTileBlockStorybookMeta } from "@botspot/ui/storybook";

import { StandaloneGalleryTile as GalleryTile } from "@botspot/ui/standalone";
import { ComponentProps, useMemo } from "react";
import { Attributes, Root } from "../schema";
import { attributesToProps } from "../utils/attributesToProps";

import { InnerBlocks } from "@wordpress/block-editor";
import Editor from "../Editor";

type GalleryTileProps = ComponentProps<typeof GalleryTile>;
export default function Edit(props: {
	attributes: Attributes;
	setAttributes: (updated: Partial<Root>) => void;
}) {
	const componentProps = useMemo(
		() => attributesToProps<GalleryTileProps>(props.attributes),
		[props.attributes],
	);

	return (
		<Editor {...props} attributes={galleryTileBlockStorybookMeta}>
			<GalleryTile {...componentProps}>
				<InnerBlocks />
			</GalleryTile>
		</Editor>
	);
}
