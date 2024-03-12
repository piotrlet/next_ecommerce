// you can connect to db or import db inside the (server) component to get data/
// components in Next 13+ are SERVER Components by DEFAULT

// Link to Test 2 shows serialization - we're moved to other page address with no page reload and server component knows how to render client component
// Serialization is passing props from server to client components

import Link from "next/link";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { TestServer } from "@/ui/atoms/TestServer";

export default async function Page() {
	// const sql = await db.connect(); OR await import ("db")
	// const data = await sql(`SELECT * FROM "Products";`);
	return (
		<>
			{/* <ul>
			 	{data.map((row) => (
					<li key={row.id}>{row.title}</li>
			))}
			 </ul> */}
			<div>
				<Link
					href="/test2"
					replace={false} // default is false; if true, it will replace the current entry in history
					scroll={true} // default is true; to scroll to the top of a new route or to maintain the scroll position for backwards and forwards navigation
					prefetch={true} // default is true; if true, it will prefetch the page when Link enters the user's viewport; for both static and dynamic routes
				>
					Link to Test 2
				</Link>
				<ProductCounter>
					<TestServer />
				</ProductCounter>
			</div>
			Test 1
		</>
	);
}

// In some scenarios you might want to use router by useRouter hook, i.e.:
// * redirect to another page after async operation like API call
// * redirect (route switch) when user is not authenticated
// * back to page after successful login
// import { useRouter } from "next/navigation"; IMPORTANT next/navigation - not next/router

// useParams with dynamic routes - similar to params
// useSearchParams with query params
