import { CustomPost } from "../../global";
import { LandingPageProduct } from "./LandingPageProduct";

type LandingPageProductsProps = {
	products: CustomPost[];
};
export default function LandingPageProducts({
	products,
}: LandingPageProductsProps) {
	return products?.map((product) => (
		<LandingPageProduct key={product.id} product={product} />
	));
}
