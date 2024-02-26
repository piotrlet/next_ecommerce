import { formatCurrency } from "@/utils";
import type { ProductItemType } from "@/ui/types";

type ProductItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductItemDescription = ({
	product: { name, category, price },
}: ProductItemDescriptionProps) => {
	return (
		<div className="flex h-full flex-col justify-between">
			<div>
				<h3>{name}</h3>
				<p>
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<p>
				<span className="sr-only">Cena:</span> {formatCurrency(price / 100)}
			</p>
		</div>
	);
};
