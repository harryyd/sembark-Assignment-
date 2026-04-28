import { createContext, } from 'react';


type Product = {
    id: number;
    title: string;
    price: number;
    images: string[];
    category?: {
        name : string
    };
    // filter?: string[] 
    // quantity?: number;
};
interface StoreContextType {
    variables: string,
    totalItems?: number,
    totalPrice?: number,
    itemsList?: number[],
    itemData?: Product[],
    productData: Product[];
    allProducts: Product[];
    allCategory: string[],
    filteredProducts: Product[],
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    selectedCategory:string[],
    handleCategory: (category : string) => void ,
    setProductData?: React.Dispatch<React.SetStateAction<Product[]>>;
    setAllProducts?: React.Dispatch<React.SetStateAction<Product[]>>;
    addToCart?: (data: Product) => void
    removeFromCart?: (id: number) => void
    increaseQuantity?: (id: number) => void
    decreaseQuantity?: (id: number) => void
}


const StoreContext = createContext<StoreContextType | null>(null);

export default StoreContext;