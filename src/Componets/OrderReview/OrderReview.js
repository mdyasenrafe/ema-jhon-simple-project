import React from "react";
import { Link } from "react-router-dom";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import UseCart from "../UseCart/UseCart";

const OrderReview = () => {
  const [cart, setCart] = UseCart();
  console.log(cart);
  const handleRemove = (key) => {
    const newCart = cart.filter((data) => data.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };
  const handlePlaceOrder = () => {
    // setCart([]);
    // clearTheCart();
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((data) => (
          <ReviewItem
            item={data}
            handleRemove={handleRemove}
            key={data.key}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/shipping">
            <button onClick={handlePlaceOrder} className="btn">
              Procced Your Shipping
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
