import React, { useContext } from "react";
// import { StoreContext } from "../App";

import StoreContext from "../context/StoreContext";

type Product = {
    id: number;
    title: string;
    price: number;
    images: string[];
    category?: {
        name: string
    };
};

type CartItem = Product & {
    quantity?: number;
};


const Cart: React.FC = () => {
    const store = useContext(StoreContext);
    if (!store) return null;
    console.log("aerfgdf", store.itemData)

    const { totalPrice, totalItems } = store;

    const cartItems: CartItem[] = store?.itemData || [];

    const removeHandler = (id: number) => {
        if (store.removeFromCart) {
            store.removeFromCart(id);
        }
    };

    const decreaseQuantityHandler = (id: number) => {
        if (store.decreaseQuantity) {
            store.decreaseQuantity(id);
        }
    };

    const increaseQuantityHandler = (id: number) => {
        if (store.increaseQuantity) {
            store.increaseQuantity(id);
        }
    };

    return (
   <div className="min-h-screen p-6 bg-pink-100 text-gray-700">
  
  <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

  <div className="grid md:grid-cols-3 gap-6">

    {/* LEFT SIDE */}
    <div className="md:col-span-2 space-y-4">

      {cartItems.length === 0 ? (
    
        <div className="flex flex-col items-center justify-center 
          h-64 bg-white rounded-xl shadow text-center">

          <p className="text-lg font-medium text-gray-500">
            Your cart is empty
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Add some products to see them here
          </p>

        </div>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
          >
            <img
              src={item.images?.[0] || "/fallback.png"}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />

            <div className="flex-1 flex flex-col">
              <h2 className="font-semibold text-black">{item.title}</h2>
              <p className="text-gray-500">₹{item.price}</p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                  onClick={() => decreaseQuantityHandler(item.id)}
                >
                  -
                </button>

                <span>{item.quantity || 1}</span>

                <button
                  className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                  onClick={() => increaseQuantityHandler(item.id)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Remove */}
            <button
              className="text-red-500 font-semibold cursor-pointer"
              onClick={() => removeHandler(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}

    </div>

    {/* RIGHT SIDE - ALWAYS VISIBLE */}
    <div className="bg-white p-6 rounded-xl shadow h-fit">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between mb-2">
        <span>Items</span>
        <span>{totalItems || 0}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Total</span>
        <span className="font-bold">₹{totalPrice || 0}</span>
      </div>

      <button
        className="w-full mt-4 bg-black text-white py-2 rounded-lg 
        hover:bg-gray-800 disabled:bg-gray-400"
        disabled={cartItems.length === 0}
      >
        Checkout
      </button>
    </div>

  </div>
</div>

    );
};

export default Cart;
