import { ProductListItem } from "../molecules/ProductListItem";
import type { ProductItemType } from "../types";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
