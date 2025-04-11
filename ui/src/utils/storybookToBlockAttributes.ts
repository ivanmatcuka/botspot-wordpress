import type { Meta } from "@storybook/react";
import { Attributes } from "../schema";

type StrybookControlType =
	| "object"
	| "boolean"
	| "check"
	| "inline-check"
	| "radio"
	| "inline-radio"
	| "select"
	| "multi-select"
	| "number"
	| "range"
	| "file"
	| "color"
	| "date"
	| "text";

function inferAttributeType(
	type: StrybookControlType,
	options?: readonly any[],
): any {
	const typeMap: Record<StrybookControlType, any> = {
		text: {
			type: "string",
		},
		number: {
			type: "number",
		},
		select: {
			type: "string",
			enum: options,
		},
		boolean: {
			type: "boolean",
		},
		object: {
			type: "object",
		},
	};

	const wpType = typeMap[type]["type"] || "string";

	const attr: any = { type: wpType };

	if (options?.length) {
		attr.enum = options;
	}

	return attr;
}

export function storybookToBlockAttributes(meta: Meta): Attributes {
	const attributes: Record<string, any> = {};

	const args = meta.args ?? {};
	const argTypes = meta.argTypes ?? {};

	Object.entries(argTypes).map(([key, argType]) => {
		if (!argType?.control) return;

		attributes[key] = inferAttributeType(
			argType.control as StrybookControlType,
			argType.options,
		);
	});

	for (const key of Object.keys(args)) {
		if (args[key] && attributes[key]) {
			attributes[key].default = args[key];
		}
	}

	return attributes as Attributes;
}
