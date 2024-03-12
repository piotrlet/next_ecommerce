// square brackets (in folder name) indicate dynamic routes.
// folders name will equal parameter name used (productId)

// special props {params} is passed with - have no special name, but param name - alwyas a string!

// can also be an async function

export default async function SingleProductPage(
	{
		// params,
		// searchParams,
	}: {
		params: { productId: string };
		searchParams: { [key: string]: string | string[] };
	},
) {
	// #1 get data here i.e. and display in a single product component
	// const data = await getProductById(params.productId)

	// #2 can use query params ("?" in url) using Nest's searchParams prop (can be string or array )
	// const referral = searchParams.referral.toString();

	return <div>{/*<SingleProductPage product={product} />*/}</div>;
}
