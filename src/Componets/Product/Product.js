import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

const Product = (props) => {
  const { img, name, price, stock, seller } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <p>
          <small>By: </small>
          {seller}
        </p>
        <p>
          $ <span>{price}</span>
        </p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <button
          onClick={() => props.handleAddProduct(props.product)}
          className="btn"
        >
          {cartIcon}
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
