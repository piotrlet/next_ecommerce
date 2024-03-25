import { ProductList } from "@/ui/organisms/ProductList";
import type { ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Accessories",
		name: "Wayfarer Classic",
		price: 1250,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
			alt: "TODO",
		},
	},
	{
		id: "2",
		category: "Accessories",
		name: "Wayfarer Classic",
		price: 1250,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
			alt: "TODO",
		},
	},
	{
		id: "3",
		category: "Accessories",
		name: "Wayfarer Classic",
		price: 1250,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
			alt: "TODO",
		},
	},
	{
		id: "4",
		category: "Accessories",
		name: "Wayfarer Classic",
		price: 1450,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
			alt: "TODO",
		},
	},
];
export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:px-6 lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
