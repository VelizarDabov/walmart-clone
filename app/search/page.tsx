import React from "react";
import { faker } from '@faker-js/faker';
type Props = {
  searchParams: {
    q: string;
  };
};
const SearchPage = ({ searchParams: { q } }: Props) => {

  return <div className="p-10">
    <h1 className="text-3xl font-bold mb-2">Results for {q}</h1>
    <h2 className="mb-5 text-gray-400">
        {(Math.random()*1000).toFixed()} results
    </h2>
  </div>;
};

export default SearchPage;
