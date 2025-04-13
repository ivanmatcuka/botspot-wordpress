import { StandalonePosts as Posts } from "@botspot/ui/standalone";
import { ComponentProps, useEffect, useState } from "react";

import Editor from "../Editor";
import { getPosts } from "../utils";
import blockConfig from "./block.json";

type PostsProps = ComponentProps<typeof Posts>;
export default function Edit(props: {
	attributes: PostsProps;
	setAttributes: (props: Partial<PostsProps>) => void;
}) {
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [count, setCount] = useState(0);
	const [posts, setPosts] = useState<any[]>([]);

	useEffect(() => {
		setLoading(true);
		getPosts(page, props.attributes.perPage)
			.then(({ count, data }) => {
				setPosts(data);
				setCount(count);
			})
			.finally(() => setLoading(false));
	}, [page, props.attributes.perPage]);

	return (
		<Editor {...props} blockConfig={blockConfig.attributes}>
			<Posts
				{...props.attributes}
				setPage={setPage}
				posts={props.attributes.posts ?? posts}
				count={count}
				loading={loading}
			/>
		</Editor>
	);
}
