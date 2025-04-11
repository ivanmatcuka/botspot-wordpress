import { pageContainerBlockStorybookMeta } from "@botspot/ui/storybook";

import { StandalonePageContainer as PageContainer } from "@botspot/ui/standalone";
import { ComponentProps, useMemo } from "react";
import { Attributes, Root } from "../schema";
import { attributesToProps } from "../utils/attributesToProps";

import { InnerBlocks } from "@wordpress/block-editor";
import Editor from "../Editor";

type PageContainerProps = ComponentProps<typeof PageContainer>;
export default function Edit(props: {
	attributes: Attributes;
	setAttributes: (updated: Partial<Root>) => void;
}) {
	const componentProps = useMemo(
		() => attributesToProps<PageContainerProps>(props.attributes),
		[props.attributes],
	);

	return (
		<Editor {...props} attributes={pageContainerBlockStorybookMeta}>
			<PageContainer {...componentProps}>
				<InnerBlocks />
			</PageContainer>
		</Editor>
	);
}
