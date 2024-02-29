import { formatCurrency } from "@/utils";
import type { ProductItemType } from "@/ui/types";

type ProductItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductItemDescription = ({
	product: { name, category, price },
}: ProductItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<p>
				<span className="sr-only">Cena:</span> {formatCurrency(price / 100)}
			</p>
		</div>
	);
};
