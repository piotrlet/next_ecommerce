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
				<Link href="/test2">Link to Test 2</Link>
				<ProductCounter>
					<TestServer />
				</ProductCounter>
			</div>
			Test 1
		</>
	);
}
