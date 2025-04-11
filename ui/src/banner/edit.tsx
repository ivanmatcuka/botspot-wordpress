import { StandaloneBanner as Banner } from "@botspot/ui/standalone";

import { ComponentProps, useMemo } from "react";
import { Attributes, Root } from "../schema";
import { attributesToProps } from "../utils/attributesToProps";
import block from "./block.json";

import Editor from "../Editor";

type BannerProps = ComponentProps<typeof Banner>;
export default function Edit(props: {
	attributes: Attributes;
	setAttributes: (updated: Partial<Root>) => void;
}) {
	const componentProps = useMemo(
		() => attributesToProps<BannerProps>(props.attributes),
		[props.attributes],
	);

	return (
		<Editor {...props} blockConfig={block.attributes}>
			<Banner {...componentProps} />
		</Editor>
	);
}
