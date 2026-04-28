

// import React, { useContext, useState , useEffect} from "react";
// import StoreContext from "../context/StoreContext";
// // import type { Product } from "../TypeSource/allTypes";


// interface Product {
//     id: number;
//     title: string;
//     price: number;
//     images:string[];
//     category?: {
//         name :  string
//     };
// }

// type CartItem = Product & {
//   description?: string;
// };

// const ProductSearch: React.FC = () => {
//   const [query, setQuery] = useState("");

//   const store  = useContext(StoreContext) ;
//   console.log("Store in SearchBar:", store?.allCategory) ;

//   //  const allCategories:string[] = store?.allCategory ; 
//   //  console.log(allCategories)


//  useEffect(() => {
//   const timer = setTimeout(() => {
//     if (!store) return;

//     const { allProducts } = store;

//     if (!query.trim()) {
//       store?.setProductData?.(store?.allProducts || []); // ✅ reset
//       return;
//     }

//     const lowerQuery = query.toLowerCase();

//     const filtered = allProducts?.filter((item: CartItem) => {
//       return (
//         item.title.toLowerCase().includes(lowerQuery) ||
//         item.description?.toLowerCase().includes(lowerQuery)
//       );
//     });

//     store?.setProductData?.(filtered || []);
//   }, 500);

//   return () => clearTimeout(timer);
// }, [query]);



//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     // onSearch(query);
//   };

//   return (
//     <form
//       onSubmit={handleSearch}
//       className="w-full max-w-xl mx-auto pt-10"
//     >
//       <div className="relative">
        
//         {/* Input */}
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="
//             w-full pl-12 pr-4 py-3 rounded-xl
//             bg-gradient-to-br from-[#1a1025] via-[#2a1b3d] to-[#0f0a1a]
//             text-white placeholder-gray-400
//             border border-white/10
//             outline-none
//             transition-all duration-300
//             focus:ring-2 focus:ring-purple-600
//             focus:border-transparent
//           "
//         />


//         <button
//           type="submit"
//           className="
//             absolute right-2 top-1/2 -translate-y-1/2
//             px-4 py-1.5 rounded-lg text-sm font-medium
//             bg-gradient-to-r from-purple-600 to-fuchsia-600
//             hover:from-purple-700 hover:to-fuchsia-700
//             text-white
//             transition-all duration-300
//             active:scale-95
//           "
//         >
//           Search
//         </button>

//       </div>
//     </form>
//   );
// };

// export default ProductSearch;


import React, { useContext } from "react";
import StoreContext from "../context/StoreContext";

const ProductSearch: React.FC = () => {
  const store = useContext(StoreContext);
  if (!store) throw new Error("StoreContext not found");

  const { query, setQuery } = store;

  return (
    <form className="w-full max-w-xl mx-auto pt-10">
      <div className="relative">

        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full pl-12 pr-4 py-3 rounded-xl
            bg-gradient-to-br from-[#1a1025] via-[#2a1b3d] to-[#0f0a1a]
            text-white placeholder-gray-400
            border border-white/10
            outline-none
            transition-all duration-300
            focus:ring-2 focus:ring-purple-600
          "
        />

        <button
          type="submit"
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            px-4 py-1.5 rounded-lg text-sm font-medium
            bg-gradient-to-r from-purple-600 to-fuchsia-600
            text-white
          "
        >
          Search
        </button>

      </div>
    </form>
  );
};

export default ProductSearch;
