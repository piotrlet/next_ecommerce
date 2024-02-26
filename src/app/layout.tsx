import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
    <html lang="en">
      <body className={inter.className}>
        <section className="sm:py-18 mx-auto flex w-full max-w-md flex-grow flex-col p-12 px-8 py-12 sm:px-6 lg:max-w-7xl">
          {children}
        </section>
        <footer>
					<p className="text-center text-gray-500">© 2024</p>
				</footer>
      </body>
    </html>
  );
}