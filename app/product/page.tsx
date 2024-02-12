
import products from "@/products";

import React from "react";
type Props = {
  searchParams: {
    q: string;
  };
};
interface Products {
  name: string;
  image: string;
  price: number;
  category: string;
  rating?: number;
  url?: string;
}
const ProductPage = ({ searchParams: { q } }: Props) => {

  return <div>
    <div>
        
    </div>
  </div>;
};

export default ProductPage;
