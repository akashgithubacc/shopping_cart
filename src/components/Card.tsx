"use client";
import React, { useState } from "react";
import { Service } from "@/lib/data";
import Link from "next/link";

interface CardProps {
	service: Service;
	addToCart: (service: Service) => void;
}

const Card = ({ service, addToCart }: CardProps) => {
	const { title, description, cost, isAddedToCart } = service;

	const [addedToCart, setAddedToCart] = useState(isAddedToCart);

	const handleAddToCart = () => {
		if (!addedToCart) {
			addToCart(service);
			setAddedToCart(true);
		}
	};

	return (
		<div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-lg">
			<div>
				<h2 className="text-xl font-bold text-gray-800 mb-2">
					{title}
				</h2>
				<p className="text-gray-600 text-sm mb-4">{description}</p>
				<p className="text-lg font-semibold text-gray-900">
					₹{cost.toFixed(2)}
				</p>
			</div>
			<button
				className={`mt-4 w-full py-2 rounded-lg font-medium text-sm transition-colors duration-200 ${
					addedToCart
						? "bg-gray-300 text-gray-600 cursor-not-allowed"
						: "bg-blue-500 text-white hover:bg-blue-600"
				}`}
				disabled={addedToCart}
				onClick={handleAddToCart}
			>
				{addedToCart ? (
					<Link href="/cart" className="underline">
						View Cart
					</Link>
				) : (
					"Add to Cart"
				)}
			</button>
		</div>
	);
};

export default Card;
