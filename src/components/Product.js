import React from "react";
import PropTypes from "prop-types";

function Product({ product, addProduct }) {
  return (
    <div className="Product">
      <output>{product.name}</output>
      <output>(${product.price}) </output>
      <button onClick={() => addProduct(product)}>+</button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default Product;
