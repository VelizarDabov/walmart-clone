import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "lucide-react";

interface ProductProps {
  product: Product;
}

interface Product {
  name: string;
  image: string;
  price: number;
  url: string;
  rating:number;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link
      className="flex flex-col relative border rounded-md h-full p-5"
      href={{
        pathname: "/product",
        query: { url: product.url },
      }}
    >
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="mx-auto"
      />
      <p className="text-xl font-bold">$ {product.price}</p>
      <Badge className="w-fit absolute top-2 right-2"></Badge>

      {product.rating && ( <p className="text-yellow-500 text-sm">
        {product.rating}⭐
       
      </p>)}
    </Link>
  );
};

export default Product;
