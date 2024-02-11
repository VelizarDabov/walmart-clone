"use client";
import React, { FC, useEffect, useState } from "react";
import products from "@/products";
import Product from "@/components/Product";
type Props = {
  searchParams: {
    q: string;
  };
};
interface Product {
  name: string;
  image: string;
  price: number;
  url:string;
  category:string;
}
const SearchPage = ({ searchParams: { q } }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);


  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.category.toLowerCase().includes(q.toLowerCase()) ||
        product.name.toLowerCase().includes(q.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Results for {q}</h1>
      <h2 className="mb-5 text-gray-400">
        {filteredProducts.length} results
      </h2>
  
      {filteredProducts.map((product) => (
        <li key={product.name} className="flex flex-col md:flex-row ">
          {/* <img
            src={product.image}
            alt={product.name}
            className="h-32 w-32 object-cover mb-2"
          />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p> */}
           <Product product={product}/>
        </li>
      ))}
    </div>
  );
};

export default SearchPage;
