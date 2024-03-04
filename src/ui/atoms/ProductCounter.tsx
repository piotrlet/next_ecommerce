// useState can be used only in client  Componets - not Server
// therefore "use client" directive is needed

"use client";

import { useState } from "react";

export const ProductCounter = () => {
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
		</div>
	);
};
