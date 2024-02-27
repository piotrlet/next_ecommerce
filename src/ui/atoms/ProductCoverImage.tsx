export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				width={320}
				height={320}
				src={src}
				alt={alt}
				className="w-full object-contain object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
