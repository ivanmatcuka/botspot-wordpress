import { StandaloneDownloadAreaContent as DownloadAreaContent } from "@botspot/ui/standalone";
import { ComponentProps, useEffect, useState } from "react";

import { InnerBlocks } from "@wordpress/block-editor";
import Editor from "../Editor";
import { getProducts } from "../utils";

type DownloadAreaContentProps = ComponentProps<typeof DownloadAreaContent>;
export default function Edit(props: {
	attributes: DownloadAreaContentProps;
	setAttributes: (props: Partial<DownloadAreaContentProps>) => void;
}) {
	const [data, setData] = useState<any[]>();

	useEffect(() => {
		getProducts().then(({ data }) => {
			setData(data);
		});
	}, []);

	return (
		<Editor {...props} blockConfig={{}}>
			<DownloadAreaContent {...props.attributes} products={data ?? []}>
				<InnerBlocks />
			</DownloadAreaContent>
		</Editor>
	);
}
