import { useState , useMemo } from "react";
import StoreContext from "./StoreContext";
import { toast } from "react-toastify";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
  category?: {
    name : string
  };
};

type CartItem = Product & {
  quantity: number;
};

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [itemData, setItemData] = useState<CartItem[]>([]);
  const [productData, setProductData] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);


  const addToCart = (data: Product) => {
    const exists = itemData.some(item => item.id === data.id);

    if (exists) {
      toast.error("Item is already present in cart");
      return;
    }

    setItemData(prev => [
      ...prev,
      { ...data, quantity: 1,}
    ]);

    toast.success("Item added to cart");
  };

  const removeFromCart = (id: number) => {
    const exists = itemData.some(item => item.id === id);

    if (!exists) return;

    setItemData(prev =>
      prev.filter(item => item.id !== id)
    );

    toast.error("Item removed from cart");
  };


  const increaseQuantity = (id: number) => {
    setItemData(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
  setItemData(prev =>
    prev
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0) // remove if 0
  );
};


 const totalItems = itemData.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = useMemo(() => {
    return itemData.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [itemData]);

  return (
    <StoreContext.Provider
      value={{
        itemData,
        addToCart: addToCart,
        removeFromCart,
        productData,
        setProductData,
        allProducts,
        setAllProducts,
        totalItems: itemData.length || totalItems,
        variables: "bnakai", 
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};