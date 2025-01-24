"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const CartPage = () => {
	const { cartItems, removeFromCart, cartTotal } = useCart();

	return (
		<div className="max-w-5xl mx-auto px-6 py-10">
			<h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
				Your Cart
			</h1>
			{cartItems.length > 0 ? (
				<div className="bg-white shadow-md rounded-lg p-6">
					<div className="mb-6">
						{cartItems.map((item) => (
							<div
								key={item.id}
								className="flex justify-between items-center border-b pb-4 mb-4"
							>
								<div>
									<h2 className="text-xl font-semibold text-gray-800">
										{item.title}
									</h2>
									<p className="text-gray-600">
										{item.description}
									</p>
								</div>
								<p className="text-lg font-medium text-gray-800">
									₹{item.cost.toFixed(2)}
								</p>
								<button
									className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
									onClick={() => removeFromCart(item.id)}
								>
									Remove
								</button>
							</div>
						))}
					</div>
					<div className="flex justify-between items-center border-t pt-4">
						<h2 className="text-2xl font-semibold text-gray-800">
							Total: ₹{cartTotal.toFixed(2)}
						</h2>
						<Link
							href="/checkout"
							className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-600 transition-all"
						>
							Checkout
						</Link>
					</div>
				</div>
			) : (
				<div className="text-center py-20">
					<h2 className="text-2xl font-medium text-gray-700 mb-4">
						Your cart is empty!
					</h2>
					<p className="text-gray-600 mb-6">
						Explore our services and add them to your cart.
					</p>
					<Link
						href="/"
						className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-600 transition-all"
					>
						Back to Shopping Area
					</Link>
				</div>
			)}
		</div>
	);
};

export default CartPage;
