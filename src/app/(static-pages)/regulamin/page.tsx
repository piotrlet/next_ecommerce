// (static-pages) - this folder, put in brackets, will be omitted in the url  / will not affect routing
// it's an example name
// convention used for static contenet or private folders
// can have their own layout, served in the /(static-pages)/layout.tsx file

// https://nextjs.org/docs/getting-started/project-structure

export default function Regulamin() {
	return (
		<>
			<h1 className="text-4xl font-bold">Regulamin</h1>
			<p className="text-xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
				doloribus.
			</p>
		</>
	);
}
