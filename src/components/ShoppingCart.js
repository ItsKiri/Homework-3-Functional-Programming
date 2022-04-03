import React from "react";
import PropTypes from "prop-types";

function ShoppingCart({ productsInCart, removeProduct }) {
  const total = productsInCart.reduce(
    (pTotal, product) => pTotal + product.price,
    0
  );
  function renderProductsInCart() {
    return (
      <span>
        <h3>Products in Cart</h3>
        {productsInCart.map((p, i) => (
          <div key={"pic" + i}>
            1 {p.name} (${p.price})
            <button onClick={() => removeProduct(p)}>-</button>
          </div>
        ))}
      </span>
    );
  }
  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      <label>
        Total <output>{total}</output>
      </label>

      {productsInCart.length ? (
        renderProductsInCart()
      ) : (
        <div>"No products in cart yet"</div>
      )}
    </div>
  );
}

ShoppingCart.propTypes = {
  productsInCart: PropTypes.array.isRequired,
};

export default ShoppingCart;
