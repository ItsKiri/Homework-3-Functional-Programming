import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

function ProductList({ products, addProduct }) {
  return (
    <div className="ProductList">
      <h2>Products</h2>
      <div>
        {products.map((p, i) => (
          <Product
            key={"product" + i}
            product={p}
            addProduct={addProduct}
          ></Product>
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
