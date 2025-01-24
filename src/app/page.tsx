"use client";

import { catalogue } from "@/lib/data";
import Card from "@/components/Card";
import { useCart } from "@/context/CartContext";

const Page = () => {
	const { addToCart, cartItems } = useCart();

	console.log(cartItems);

	return (
		<div className="min-h-screen bg-gray-50 py-10">
			<div className="max-w-7xl mx-auto px-6">
				<h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
					Available Services
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{catalogue.map((service) => (
						<Card
							key={service.id}
							service={service}
							addToCart={addToCart}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
