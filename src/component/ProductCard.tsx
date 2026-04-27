import React, { useState } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../context/StoreContext";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  images:string[];
  category?: {
    name : string 
  };
}

type CartItem = {
  id: number;
  title: string;
  price: number;
  images:string[];
  category?: {
    name : string 
  };
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,  //number 
  title,
  price,  
  images,
  category,
}) => {
  const [imgError, setImgError] = useState(false);
  const store = React.useContext(StoreContext);

  // console.log("Store in ProductCard:", store);
  // console.log("sadvsj" , typeof id , id )  ;

const addToCartHandler = (): void => {
  const productData: CartItem = {
    id,
    title,
    price,
    images,
    category:  category ? { name: category.name } : undefined,
  };

  store?.addToCart?.(productData);

  console.log("done");
  console.log("totalItems", store?.totalItems);
};

  return (
    <div className="group w-64 rounded-2xl overflow-hidden 
     bg-gradient-to-br from-purple-700 via-fuchsia-800 to-gray-900
      shadow-lg hover:shadow-2xl 
      transition-all duration-300 hover:-translate-y-2"
    >
      
      {/* Image Section */}
      <Link to={`/product/${id}`}>
        <div className="relative h-52 bg-gray-100 overflow-hidden">
          
          {/* Category Badge */}
          {category && (
            <span className="absolute top-3 left-3 z-10 text-black 
              bg-white/80 backdrop-blur px-3 py-1 text-xs font-semibold rounded-full">
              {category.name}
            </span>
          )}

          <img
             src={imgError ? "/fallback.png" : images?.[0] || "/fallback.png"}
            alt={title}
            className="w-full h-full object-contain p-4 
              transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 
            group-hover:bg-black/10 transition duration-300"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold line-clamp-2 min-h-[40px]">
          {title}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-green-400">
            ₹{price}
          </span>

          <button className="px-4 py-1.5 text-sm font-semibold rounded-lg 
            bg-gradient-to-r from-green-500 to-emerald-600 
            hover:from-green-600 hover:to-emerald-700 
            transition-all duration-200 active:scale-95"
            onClick={addToCartHandler}
            >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
