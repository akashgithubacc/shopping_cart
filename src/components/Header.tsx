"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const Header = () => {
	const { cartItemCount } = useCart();

	return (
		<header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
			<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo Section */}
				<div className="text-3xl font-bold text-blue-600">
					<Link href="/">EazShop</Link>
				</div>

				{/* Navigation Links */}
				<nav className="flex gap-4">
					<Link
						href="/"
						className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
					>
						Shopping Area
					</Link>
					<Link
						href="/cart"
						className="relative bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-medium hover:bg-blue-600 transition-all duration-200"
					>
						View Cart
						{cartItemCount > 0 && (
							<span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
								{cartItemCount}
							</span>
						)}
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
