import React from "react";
import { Link } from "react-router-dom";
const SingleProduct = (props) => {
  const { id, brand, price } = props.product;
  return (
    <div>
      <h2>
        <Link to={"/productDetails/" + id}>Brand: {brand}</Link>
      </h2>

      <h5>Price:{price} </h5>
    </div>
  );
};

export default SingleProduct;
