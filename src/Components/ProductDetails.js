import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // const { para } = useParams();
  console.log(useParams());
  return (
    <div>
      <h1>This is product details</h1>
    </div>
  );
};

export default ProductDetails;
