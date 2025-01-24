"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Service } from "@/lib/data";

interface CustomerDetails {
	name: string;
	email: string;
	phone: string;
}

interface CartContextType {
	cartItems: Service[];
	addToCart: (service: Service) => void;
	removeFromCart: (serviceId: number) => void;
	clearCart: () => void;
	cartTotal: number;
	cartItemCount: number;
	customerDetails: CustomerDetails | null;
	setCustomerDetails: (details: CustomerDetails) => void;
	lastTransactionTotal: number;
	setLastTransactionTotal: (amount: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
	const [cartItems, setCartItems] = useState<Service[]>([]);
	const [customerDetails, setCustomerDetails] =
		useState<CustomerDetails | null>(null);
	const [lastTransactionTotal, setLastTransactionTotal] = useState(0);

	const addToCart = (service: Service) => {
		setCartItems((prevItems) => [
			...prevItems,
			{ ...service, quantity: 1 },
		]);
	};

	const removeFromCart = (serviceId: number) => {
		setCartItems((prevItems) =>
			prevItems.filter((item) => item.id !== serviceId)
		);
	};

	const clearCart = () => setCartItems([]);

	const cartTotal = cartItems.reduce((total, item) => total + item.cost, 0);
	const cartItemCount = cartItems.length;

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				clearCart,
				cartTotal,
				cartItemCount,
				customerDetails,
				setCustomerDetails,
				lastTransactionTotal,
				setLastTransactionTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
