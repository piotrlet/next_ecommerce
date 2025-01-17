"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = ({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href as Route}
			className={clsx(
				`text-gray-400 hover:text-gray-700`,

				{ underline: isActive },
			)}
		>
			{children}
		</Link>
	);
};
