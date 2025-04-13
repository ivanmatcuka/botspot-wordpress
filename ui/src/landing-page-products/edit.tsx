import { ComponentProps, useEffect, useState } from "react";
import type { WP_REST_API_Post } from "wp-types";

import { ThemeRegistry } from "@botspot/ui";
import Editor from "../Editor";
import { getProducts } from "../utils";
import LandingPageProducts from "./LandingPageProducts";

type LandingPageProductsProps = ComponentProps<typeof LandingPageProducts>;
export default function Edit(props: {
	attributes: LandingPageProductsProps;
	setAttributes: (props: Partial<LandingPageProductsProps>) => void;
}) {
	const [data, setData] = useState<WP_REST_API_Post[]>();

	useEffect(() => {
		getProducts().then(({ data }) => {
			setData(data);
		});
	}, []);

	return (
		<Editor {...props} blockConfig={{}}>
			<ThemeRegistry>
				<LandingPageProducts products={data ?? []} />
			</ThemeRegistry>
		</Editor>
	);
}
