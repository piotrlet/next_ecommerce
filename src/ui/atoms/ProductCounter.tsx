// useState can be used only in client  Componets - not Server
// therefore "use client" directive is needed

// shared components - server components used in client components
// it's not OK; i.e. increases bundle size

// solution is to use {children} as props  render directive (children: ReactNode)

 

"use client";

import { type ReactNode, useState } from "react";

export const ProductCounter = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [counter, setCounter] = useState(0);
	return (
		<div className="flex justify-center">
			<button
				onClick={() => setCounter(counter - 1)}
				className="mx-4 border border-slate-400 px-4"
			>
				-
			</button>
			<input
				readOnly
				type="text"
				value={counter}
				className="border border-slate-400"
			/>
			<button
				onClick={() => setCounter(counter + 1)}
				className="mx-4 border border-slate-400 px-4"
			>
				+
			</button>
			{counter % 2 == 0 && children}
		</div>
	);
};
