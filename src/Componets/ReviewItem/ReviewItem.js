import React from "react";

const ReviewItem = (props) => {
  const { name, price, quantity, img, seller, key } = props.item;
  const handleRemove = props.handleRemove;
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
          <small>Quantity: </small>
          {quantity}
        </p>
        <p>
          $ <span>{price}</span>
        </p>
        <button onClick={() => handleRemove(key)} className="btn">
          Remove To Cart
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
