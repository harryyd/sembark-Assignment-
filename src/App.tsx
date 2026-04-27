
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { createContext, useContext, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import SingleProduct from './pages/SingleProduct';
import AppLayout from './pages/AppLayout';
import { StoreProvider } from './context/StoreProvider';
import Cart from './pages/cart';
import { ToastContainer } from 'react-toastify';

// interface StoreContextType {
//   variables : string ,
//   totalItems? : number ,
//   totalPrice? : number ,
//   itemsList? : number[] ,
//   addToCart? : (id :number) => void 
//   removeFromCart? : (id : number) => void  
//   increaseQuantity? : (id : number) => void
//   decreaseQuantity? : (id : number) => void
// }

// const StoreContext = createContext<StoreContextType>({
//   variables: "",
//   totalItems: 0,
//   totalPrice: 0,
//   itemsList: [0] ,
//   addToCart: () => {},
//   removeFromCart: () => {},
//   increaseQuantity: () => {},
//   decreaseQuantity: () => {},
// });

const App: React.FC = () => {
  // const [count, setCount] = useState(0)
  // const [itemLists , setItemLists] =useState<number[]>([]); 
  // const store = useContext(StoreContext) ;

  const router = createBrowserRouter([
    { 
      element: <AppLayout />,
      children : [
        {
          path :  "/" ,
          element : <Home />
        } ,
        { 
          path :  "/about" ,
          element : <About />
        },
        {
          path : "/product" , 
          element : <Product /> 
        },
        {
          path : "/product/:id" , 
          element : <SingleProduct /> 
        },
                {
          path : "/cart" , 
          element : <Cart /> 
        }
      ]
    },
  ]);

  console.log(router) ; 
  return (
    <div className="min-h-screen">
    <StoreProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={2000} theme='dark'/>
    </StoreProvider>
    </div>
  )
}

export default App
// export { StoreContext } ;