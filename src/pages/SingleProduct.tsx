import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StoreContext from "../context/StoreContext";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category?: {
        name: string;
    };
};

const SingleProduct: React.FC = () => {
    const { id } = useParams();
    const store = useContext(StoreContext);

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {

        const getProduct = async () => {
            try {
                setLoading(true);

                const res = await axios.get(
                    `https://api.escuelajs.co/api/v1/products/${id}`
                );

                setProduct(res.data);
            } catch (err) {
                setError("Failed to load product");
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) getProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (!product || !store?.addToCart) return;

        store.addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            images: product.images,
            category: product.category,
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Loading product...
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-400">
                {error || "Product not found"}
            </div>
        );
    }

    return (
        <div className="min-h-screen p-20 
      bg-gradient-to-br from-[#1a1025] via-[#2a1b3d] to-[#0f0a1a] text-white"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Image Section */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <img
                        src={product.images?.[0] || "/fallback.png"}
                        alt={product.title}
                        className="w-full h-[400px] object-contain"
                    />
                </div>

                {/* Content Section */}
                <div className="space-y-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        {product.category?.name}
                    </p>

                    <h1 className="text-3xl font-bold">
                        {product.title}
                    </h1>

                    <p className="text-gray-300 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="text-2xl font-bold text-green-400">
                        ₹{product.price}
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="mt-4 px-6 py-3 rounded-xl font-semibold 
              bg-gradient-to-r from-purple-600 to-fuchsia-600 
              hover:from-purple-700 hover:to-fuchsia-700 
              transition-all duration-200 active:scale-95"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
