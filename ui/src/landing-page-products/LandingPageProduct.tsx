import {
	Button,
	MediaBlock,
	PageContainer,
	ScrollableBlock,
	SecondaryBlock,
} from "@botspot/ui";
import { FC } from "react";
import { CustomFields, CustomPost } from "../../global";
import { getFeaturedImageUrl } from "../utils";

type LandingPageProductProps = {
	product: CustomPost;
};
export const LandingPageProduct: FC<LandingPageProductProps> = ({
	product,
}) => {
	if (!product.acf) return null;

	const imagesUrls =
		(product.acf as CustomFields).photo_gallery?.animation
			.flat()
			.map((url) => url.full_image_url) ?? [];

	const hasEnoughImages = imagesUrls.length > 9;

	const contentBlock = (
		<SecondaryBlock
			headline={product?.acf?.["full-name"] || product.title.rendered}
			sublineElement={product.excerpt.rendered}
		>
			<Button href={`/products/${product.slug}`} variant="primary">
				Explore {product?.acf?.["short-name"] || product.title.rendered}
			</Button>
			<Button href={`/download-area/${product.slug}`} variant="secondary">
				Download Data Sheet
			</Button>
		</SecondaryBlock>
	);

	return hasEnoughImages ? (
		<ScrollableBlock imagesUrls={imagesUrls} key={product.id}>
			{contentBlock}
		</ScrollableBlock>
	) : (
		<>
			<MediaBlock
				assetUrl={imagesUrls[0] ?? getFeaturedImageUrl(product)}
				key={product.id}
				objectFit="contain"
			/>
			<PageContainer>{contentBlock}</PageContainer>
		</>
	);
};
