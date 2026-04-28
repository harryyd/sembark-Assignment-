import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard"
import axios from "axios";
// import { StoreContext } from "../App";
import { useContext } from "react";
import StoreContext from "../context/StoreContext";
import ProductSearch from "../component/ProductSearch";
import ProductFilters from "../component/ProductFilters"





interface Product {
    id: number;
    title: string;
    price: number;
    images:string[];
    category?: {
        name :  string
    };
}

const Home = () => {

    const [product, setProduct] = useState([]);
    console.log(product);

    const store = useContext(StoreContext) ; 
    console.log("bankaivwdvwdv" , store?.variables , store?.productData)



    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("https://api.escuelajs.co/api/v1/products", { params: { offset: 0 ,limit: 92 } });
                setProduct(res.data);
                store?.setProductData?.(res.data);
                store?.setAllProducts?.(res.data);
                console.log("res", res.data);
                
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [])
    
    const Allproduct:Product[] = store?.filteredProducts || [] ;
    console.log("allproduct" , Allproduct) ;
return (
  <>

    <div className="px-6">
      <ProductSearch />
    </div>

    <div className="flex gap-6 p-6">

      {/* 🔹 Sidebar (1/4 width) */}
      <div className="w-0.5/4 min-w-[250px]">
        <ProductFilters />
      </div>

      {/* 🔹 Product List (3/4 width) */}
      <div
  className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 
  bg-gradient-to-br from-[#1a1025] via-[#2a1b3d] to-[#0f0a1a] 
  p-6 rounded-2xl shadow-lg"
>
  {Allproduct.length > 0 ? (
    Allproduct.map((prod: Product) => (
      <ProductCard
        key={prod.id}
        id={prod.id}
        title={prod.title}
        price={prod.price}
        images={prod.images}
        category={prod?.category}
      />
    ))
  ) : (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      
      <div className="text-5xl mb-4"></div>

      <h2 className="text-xl font-semibold text-white mb-2">
        No products found
      </h2>

      <p className="text-gray-400 text-sm">
        Try changing filters or search query
      </p>

    </div>
  )}
</div>


    </div>
  </>
);

}

export default Home;