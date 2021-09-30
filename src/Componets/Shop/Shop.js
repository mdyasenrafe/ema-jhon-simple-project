import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, Setproducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch("products.JSON")
      .then((res) => res.json())
      .then((data) => {
        Setproducts(data);
        setDisplayProducts(data);
      });
  }, []);

  useEffect(() => {
    const getdbProducts = getStoredCart();
    let storeData = [];
    if (products.length) {
      for (const key in getdbProducts) {
        const addedProduct = products.find((prod) => prod.key === key);
        if (addedProduct) {
          const quantity = getdbProducts[key];
          addedProduct.quantity = quantity;
          storeData.push(addedProduct);
        }
      }
      setCart(storeData);
    }
  }, [products]);
  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
  };
  return (
    <>
      <div className="search-area">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Product"
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((prod) => (
            <Product
              key={prod.key}
              handleAddProduct={handleAddProduct}
              product={prod}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
