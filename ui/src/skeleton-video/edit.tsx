import { StandaloneSkeletonVideo as SkeletonVideo } from "@botspot/ui/standalone";
import { skeletonVideoStorybookMeta } from "@botspot/ui/storybook";

import { ComponentProps, useMemo } from "react";

import { Attributes, Root } from "../schema";
import { attributesToProps } from "../utils/attributesToProps";

import Editor from "../Editor";

type SkeletonVideoProps = ComponentProps<typeof SkeletonVideo>;
export default function Edit(props: {
	attributes: Attributes;
	setAttributes: (updated: Partial<Root>) => void;
}) {
	const componentProps = useMemo(
		() => attributesToProps<SkeletonVideoProps>(props.attributes),
		[props.attributes],
	);

	return (
		<Editor {...props} attributes={skeletonVideoStorybookMeta}>
			<SkeletonVideo {...componentProps} />
		</Editor>
	);
}
