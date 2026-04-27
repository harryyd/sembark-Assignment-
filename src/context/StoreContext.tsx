import { createContext, } from 'react';


type Product = {
    id: number;
    title: string;
    price: number;
    images: string[];
    category?: {
        name : string
    };
    // quantity?: number;
};
interface StoreContextType {
    variables: string,
    totalItems?: number,
    totalPrice?: number,
    itemsList?: number[],
    itemData?: Product[],
    productData?: Product[];
    allProducts?: Product[];
    setProductData?: React.Dispatch<React.SetStateAction<Product[]>>;
    setAllProducts?: React.Dispatch<React.SetStateAction<Product[]>>;
    addToCart?: (data: Product) => void
    removeFromCart?: (id: number) => void
    increaseQuantity?: (id: number) => void
    decreaseQuantity?: (id: number) => void
}


const StoreContext = createContext<StoreContextType | null>(null);

export default StoreContext;