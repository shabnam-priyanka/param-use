import React from "react";
import SingleProduct from "./SingleProduct";
const fakeData = [
  { id: "1", brand: "nokia", price: "$500" },
  { id: "2", brand: "samsung", price: "$500" },
  { id: "3", brand: "apple", price: "$500" },
  { id: "4", brand: "LG", price: "$500" },
  { id: "5", brand: "walton", price: "$500" },
];

const AllProjects = () => {
  return (
    <div>
      <h1>This is all products</h1>
      {fakeData.map((pd) => (
        <SingleProduct product={pd}></SingleProduct>
      ))}
    </div>
  );
};

export default AllProjects;
