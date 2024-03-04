// you can connect to db or import db inside the (server) component to get data/
// components in Next 13+ are SERVER Components by DEFAULT

import { ProductCounter } from "@/ui/atoms/ProductCounter";

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
				<ProductCounter />
			</div>
			Test 1
		</>
	);
}
