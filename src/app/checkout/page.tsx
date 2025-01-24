"use client";

import { useState, FormEvent } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
	const {
		cartTotal,
		clearCart,
		setLastTransactionTotal,
		setCustomerDetails,
	} = useCart();
	const router = useRouter();
	const [isProcessing, setIsProcessing] = useState(false);
	const [customer, setCustomer] = useState({
		name: "",
		email: "",
		phone: "",
	});

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setIsProcessing(true);

		setCustomerDetails(customer);
		setLastTransactionTotal(cartTotal);

		setTimeout(() => {
			clearCart();
			setIsProcessing(false);
			router.push("/receipt");
		}, 1000);
	};

	return (
		<div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-8">
			<div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
				<h1 className="text-3xl font-extrabold text-blue-600 text-center mb-6">
					Checkout
				</h1>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label className="block text-gray-700 font-medium mb-2">
							Full Name
						</label>
						<input
							type="text"
							required
							value={customer.name}
							onChange={(e) =>
								setCustomer({
									...customer,
									name: e.target.value,
								})
							}
							className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
						/>
					</div>
					<div>
						<label className="block text-gray-700 font-medium mb-2">
							Email
						</label>
						<input
							type="email"
							required
							value={customer.email}
							onChange={(e) =>
								setCustomer({
									...customer,
									email: e.target.value,
								})
							}
							className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
						/>
					</div>
					<div>
						<label className="block text-gray-700 font-medium mb-2">
							Phone
						</label>
						<input
							type="tel"
							required
							value={customer.phone}
							onChange={(e) =>
								setCustomer({
									...customer,
									phone: e.target.value,
								})
							}
							className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
						/>
					</div>

					<div className="p-4 bg-blue-50 border border-blue-300 rounded-lg text-blue-700">
						<h2 className="text-xl font-semibold">
							Total Amount: ₹{cartTotal.toFixed(2)}
						</h2>
					</div>

					<button
						type="submit"
						disabled={isProcessing}
						className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
					>
						{isProcessing ? "Processing..." : "Proceed to Pay"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default CheckoutPage;
