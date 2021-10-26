import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, Setproducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;
  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        Setproducts(data.products);
        setDisplayProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);
      });
  }, [page]);
  console.log("number", pageCount);

  useEffect(() => {
    const getdbProducts = getStoredCart();
    let storeCart = [];
    if (products.length) {
      for (const key in getdbProducts) {
        const addedProduct = products.find((prod) => prod.key === key);
        if (addedProduct) {
          const quantity = getdbProducts[key];
          addedProduct.quantity = quantity;
          storeCart.push(addedProduct);
        }
      }
      setCart(storeCart);
    }
  }, [products]);

  const handleAddProduct = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key != product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
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
          <div className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={number === page ? "selected" : ""}
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="btn">Review Your Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
