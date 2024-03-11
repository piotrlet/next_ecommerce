// three dosts in the pathname returns an array and allows to read all segments (catch-all) in the pathname
//  no params in pathname given leads to 404 page - solutionis to use double square brackets in the path - called optional catch-all

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

export default async function BlogPage({
	params,
}: {
	params: { pathname: string[] };
}) {
	const pathname = params.pathname?.join("/") ?? [];

	return <div>Blog {pathname}</div>;
}
