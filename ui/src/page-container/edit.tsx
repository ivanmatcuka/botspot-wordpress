import { StandalonePageContainer as PageContainer } from "@botspot/ui/standalone";
import { ComponentProps } from "react";

import { InnerBlocks } from "@wordpress/block-editor";
import Editor from "../Editor";
import blockConfig from "./block.json";

type PageContainerProps = ComponentProps<typeof PageContainer>;
export default function Edit(props: {
	attributes: PageContainerProps;
	setAttributes: (updated: Partial<PageContainerProps>) => void;
}) {
	return (
		<Editor {...props} blockConfig={blockConfig.attributes}>
			<PageContainer {...props.attributes}>
				<InnerBlocks />
			</PageContainer>
		</Editor>
	);
}
