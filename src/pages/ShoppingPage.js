import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ShoppingCart from "../components/ShoppingCart.js";
import ProductList from "../components/ProductList";

function ShoppingPage({ cm }) {
  const [products, setProducts] = useState([
    { name: "Oil", price: 6, date: 0 },
    { name: "Egg", price: 10, date: 0 },
    { name: "Meat", price: 12, date: 0 },
  ]);

  const [productsInCart, setProductsInCart] = useState([]);
  async function reloadData() {
    const data = await cm.get();
    setProductsInCart(data);
  }

  useEffect(() => {
    reloadData();
  }, [cm]);

  async function addProduct(product) {
    await setProducts([
      { name: "Oil", price: 6, date: new Date() },
      { name: "Egg", price: 10, date: new Date() },
      { name: "Meat", price: 12, date: new Date() },
    ]);
    await cm.add(product);
    await reloadData();
  }
  async function removeProduct(product) {
    await cm.remove(product);
    await reloadData();
  }
  return (
    <div className="ShoppingPage">
      <div style={{ display: "flex" }}>
        <div style={{ width: "60%" }}>
          <ProductList
            products={products}
            addProduct={addProduct}
          ></ProductList>
        </div>
        <div style={{ width: "40%" }}>
          <ShoppingCart
            productsInCart={productsInCart}
            removeProduct={removeProduct}
          ></ShoppingCart>
        </div>
      </div>
    </div>
  );
}

ShoppingPage.propTypes = {
  cm: PropTypes.object.isRequired,
};

export default ShoppingPage;
