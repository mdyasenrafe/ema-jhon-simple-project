import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
const starIcon = <FontAwesomeIcon icon={faStar} />;
const starHalfIcon = <FontAwesomeIcon icon={faStarHalfAlt} />;

const Product = (props) => {
  const { img, name, price, stock, seller, star } = props.product;
  const handleAddProduct = props.handleAddProduct;
  const product = props.product;
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
        <br />
        <Rating
          className="icon-color"
          initialRating={star}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          readonly
        ></Rating>
        <br />
        <button onClick={() => handleAddProduct(product)} className="btn">
          {cartIcon}
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
