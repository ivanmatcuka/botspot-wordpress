import { Attributes } from "../schema";

export function attributesToProps<TProps>(attributes: Attributes): TProps {
	const mappedAttributes: TProps = {} as TProps;

	Object.entries(attributes).forEach(([key, attr]) => {
		const type = typeof attr;

		if (type === "boolean") {
			mappedAttributes[key as keyof TProps] = attr ?? false;
		} else if (type === "string") {
			mappedAttributes[key as keyof TProps] = attr ?? "";
		} else if (type === "number") {
			mappedAttributes[key as keyof TProps] = attr ?? 0;
		} else if (type === "object") {
			mappedAttributes[key as keyof TProps] = attr ?? {};
		}
	});

	return mappedAttributes;
}
