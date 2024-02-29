import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductItemDescription } from "../atoms/ProductItemDescription";
import type { ProductItemType } from "../types";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => (
	<li>
		<article>
			<ProductCoverImage {...product.coverImage} />
			<ProductItemDescription product={product} />
		</article>
	</li>
);
