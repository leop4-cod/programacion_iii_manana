import { createContext } from 'react';

// Define the type for cart items
export interface CartItem {
    id: number;
    name: string;
    price?: number;
    quantity?: number;
}

// Define the context type
interface CartContextType {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'id'> & { id?: number }) => void;
    removeItem: (id: number) => void;
}

// Create the context with proper typing
export const CartContext = createContext<CartContextType>({
    items: [],
    addItem: () => { },
    removeItem: () => { }
});