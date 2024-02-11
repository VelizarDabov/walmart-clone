"use client";
import React, { FC, useEffect, useState } from "react";
import products from "@/products";
import Product from "@/components/Product";
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
  rating?:number;
  url?:string;
}
const SearchPage = ({ searchParams: { q } }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.category.toLowerCase().includes(q.toLowerCase()) ||
        product.name.toLowerCase().includes(q.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [q, products]);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Results for {q}</h1>
      <h2 className="mb-5 text-gray-400">{filteredProducts.length} results</h2>

      {filteredProducts.map((product) => (
        <li key={product.name} className="flex flex-col md:flex-row ">
          <Product product={product} />
        </li>
      ))}
    </div>
  );
};

export default SearchPage;
