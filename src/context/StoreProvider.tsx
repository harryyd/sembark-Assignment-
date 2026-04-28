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
  const [selectedCategory, setSelectedCategory] = useState<string[]>([])
  const [query, setQuery] = useState("");


  console.log("aekgjl"  , selectedCategory.length)
  // 

const filteredProducts = useMemo(() => {
  let result = allProducts;

  // ✅ Category filter
  if (selectedCategory.length > 0) {
    result = result.filter((product) => {
      const name = product.category?.name;
      return name ? selectedCategory.includes(name) : false;
    });
  }

  // ✅ Search filter
  if (query.trim() !== "") {
    const lowerQuery = query.toLowerCase();

    result = result.filter((product) =>
      product.title.toLowerCase().includes(lowerQuery)
    );
  }

  return result;
}, [allProducts, selectedCategory, query]);


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

const handleCategory = (category:string) =>{
  console.log(category) ;
  
  setSelectedCategory((prev)=>{
    if(prev.includes(category)){
      return prev.filter((cat) => cat !== category) 
    } //already then remove 
    else{
      return [...prev , category] ;
    }
    // else addd
  }
  )
}

const getAllCategories = (products: Product[]): string[] => {
  const categories: string[] = [];

  for (let i = 0; i < products.length; i++) {
    const categoryName= products[i]?.category?.name;

    // check if already exists
    if (categoryName && !categories.includes(categoryName)) {
      categories.push(categoryName);
    }
  }

  return categories;
};

//all category here
const allCategories = getAllCategories(productData) ; 

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
        setQuery,
        query,
        filteredProducts,
        allProducts,
        setAllProducts,
        allCategory:allCategories,
        selectedCategory,
        handleCategory,
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