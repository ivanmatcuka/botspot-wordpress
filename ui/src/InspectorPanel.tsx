import {
	DropdownMenu,
	Panel,
	PanelBody,
	PanelRow,
	__experimentalText as Text,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import { JsonEditor } from "json-edit-react";
import { Attributes } from "./schema";
export type DynamicBlockSettingsPanelProps<T extends Record<string, any>> = {
	attributes: T;
	config: Attributes;
	setAttributes: (updated: Partial<T>) => void;
};

export function DynamicBlockSettingsPanel<T extends Record<string, any>>({
	attributes,
	config,
	setAttributes,
}: DynamicBlockSettingsPanelProps<T>) {
	return (
		<Panel header="Properties">
			{Object.entries(config).map(([key, attrConfig]) => {
				const value = attributes[key];
				const label = attrConfig.label || key;
				const controlType = attrConfig.type;

				let input;

				switch (controlType) {
					case "string":
						if (attrConfig.enum) {
							input = (
								<>
									<Text>{value}</Text>
									<DropdownMenu
										label={label}
										controls={attrConfig.enum.map((option: string) => ({
											isActive: value === option,
											title: option,
											onClick: () =>
												setAttributes({ [key]: option } as Partial<T>),
										}))}
									/>
								</>
							);
							break;
						}
						input = (
							<TextControl
								value={value || ""}
								onChange={(val) => setAttributes({ [key]: val } as Partial<T>)}
							/>
						);
						break;
					case "boolean":
						input = (
							<ToggleControl
								label={!!value ? "true" : "false"}
								checked={!!value}
								onChange={(val) => setAttributes({ [key]: val } as Partial<T>)}
							/>
						);
						break;
					case "number":
						input = (
							<TextControl
								type="number"
								label={label}
								value={value || ""}
								onChange={(val) =>
									setAttributes({
										[key]: val ? Number(val) : undefined,
									} as Partial<T>)
								}
							/>
						);
						break;
					case "object":
						input = (
							<JsonEditor
								rootFontSize={10}
								onUpdate={(val) =>
									setAttributes({ [key]: val.newData } as Partial<T>)
								}
								data={value}
								restrictAdd
								restrictDelete
								restrictTypeSelection
								indent={2}
							/>
						);
				}

				return (
					<PanelBody key={key} title={label} initialOpen={true}>
						<PanelRow>{input}</PanelRow>
					</PanelBody>
				);
			})}
		</Panel>
	);
}
