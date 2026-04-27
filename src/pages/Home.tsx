import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard"
import axios from "axios";
// import { StoreContext } from "../App";
import { useContext } from "react";
import StoreContext from "../context/StoreContext";
import ProductSearch from "../component/ProductSearch";





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
    
    const Allproduct:Product[] = store?.productData || [] ;
    console.log("allproduct" , Allproduct) ;

    return (

        <>

        <div> <ProductSearch /> </div>

      <div className="m-4 flex flex-row flex-wrap gap-6 justify-center  p-6 rounded-2xl shadow-lg bg-[rgba(170,59,255,0.1)]  bg-gradient-to-br from-[#1a1025] via-[#2a1b3d] to-[#0f0a1a] text-white" >



            {Allproduct.length > 0 && Allproduct.map((prod: Product) => {
                return (
                        <ProductCard
                            key={prod.id}
                            id={prod.id}
                            title={prod.title}
                            price={prod.price}
                            images={prod.images}
                            category={prod?.category}
                        />
                        // <h1 className="text-xl font-bold">{prod.title}</h1>
                    
                )
            })}
            </div>
        </>

    )
}

export default Home;