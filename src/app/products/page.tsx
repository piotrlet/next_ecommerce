import Link from "next/link";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

export default async function ProductsPage() {
	const products = await getProductsList();

	return (
		<section className="mx-auto max-w-md p-12 sm:px-6 lg:max-w-7xl">
			<Link href="/test1" className="font-bold">
				Test 1
			</Link>
			<div>
				<Link href="/regulamin" className="font-bold">
					Regulamin
				</Link>
			</div>
			<ProductList products={products} />
		</section>
	);
}
