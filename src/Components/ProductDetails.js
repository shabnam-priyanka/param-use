import React from "react";
import { useParams } from "react-router-dom";
import { fakeData } from "./AllProjects";

const ProductDetails = () => {
  const { para } = useParams();

  const targetedPd = fakeData.find((td) => td.id == para);

  return (
    <div>
      <h1> Product Id{targetedPd.id} </h1>
      <h1>Brand: {targetedPd.brand} </h1>
      <h1>Price {targetedPd.price} </h1>
    </div>
  );
};

export default ProductDetails;
