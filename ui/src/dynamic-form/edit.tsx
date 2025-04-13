import { StandaloneDynamicForm as DynamicForm } from "@botspot/ui/standalone";
import { ComponentProps } from "react";

import { InnerBlocks } from "@wordpress/block-editor";
import Editor from "../Editor";
import blockConfig from "./block.json";

type DynamicFormProps = ComponentProps<typeof DynamicForm>;
export default function Edit(props: {
	attributes: DynamicFormProps;
	setAttributes: (updated: Partial<DynamicFormProps>) => void;
}) {
	return (
		<Editor {...props} blockConfig={blockConfig.attributes}>
			<DynamicForm {...props.attributes}>
				<InnerBlocks />
			</DynamicForm>
		</Editor>
	);
}
