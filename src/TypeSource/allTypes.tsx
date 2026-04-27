
type Product = {
  id: number;
  title: string;
  price: number;
  images:string[];
  category?: {
    name :  string
  };
};

type CartItem = Product & {
  quantity?: number;
  totalPrice: number;
};


export type { Product, CartItem };
