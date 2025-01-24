"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";

const ReceiptPage = () => {
	const { customerDetails, lastTransactionTotal } = useCart();

	if (!customerDetails || lastTransactionTotal === 0) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
				<div className="text-center p-8 max-w-md bg-white rounded-lg shadow-lg">
					<FaShoppingCart className="text-6xl text-blue-500 mx-auto mb-6" />
					<h1 className="text-2xl font-bold text-gray-800 mb-4">
						No Transaction Found
					</h1>
					<Link
						href="/"
						className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
					>
						Return to Services
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="bg-blue-600 text-white p-8 text-center">
					<FaCheckCircle className="text-6xl mx-auto mb-4" />
					<h1 className="text-3xl font-bold mb-2">
						Payment Successful!
					</h1>
					<p className="text-lg">Thank you for your purchase.</p>
				</div>
				<div className="p-8 border-b border-gray-200">
					<h2 className="text-xl font-semibold mb-6 text-black">
						Customer Information
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<p className="text-sm text-gray-600">Name</p>
							<p className="font-medium text-gray-900">
								{customerDetails.name}
							</p>
						</div>
						<div>
							<p className="text-sm text-gray-600">Email</p>
							<p className="font-medium text-gray-900">
								{customerDetails.email}
							</p>
						</div>
						<div>
							<p className="text-sm text-gray-600">Phone</p>
							<p className="font-medium text-gray-900">
								{customerDetails.phone}
							</p>
						</div>
						<div>
							<p className="text-sm text-gray-600">
								Transaction Date
							</p>
							<p className="font-medium text-gray-900">
								{new Date().toLocaleDateString("en-IN", {
									weekday: "long",
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</p>
						</div>
					</div>
				</div>
				<div className="p-8">
					<h2 className="text-xl font-semibold mb-6 text-black">
						Payment Summary
					</h2>
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<span className="text-gray-700">Total Amount</span>
							<span className="font-medium text-gray-900">
								₹{lastTransactionTotal.toFixed(2)}
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-gray-700">
								Payment Method
							</span>
							<span className="font-medium text-gray-900">
								Credit Card
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-gray-700">
								Transaction Status
							</span>
							<span className="font-medium text-green-600">
								Completed
							</span>
						</div>
					</div>
					<div className="mt-12 flex gap-4 justify-center">
						<Link
							href="/"
							className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
						>
							Return Home
						</Link>
						<button
							onClick={() => window.print()}
							className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
						>
							Print Receipt
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReceiptPage;
