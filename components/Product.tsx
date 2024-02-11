import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  product: Product;
}

interface Product {
  name: string;
  image: string;
  price: number;
  url: string; 
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link
      href={{
        pathname: '/product',
        query: { url: product.url },
      }}
    >
      
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className='mx-auto'
        />
   
    </Link>
  );
};

export default Product;