import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />;

const Cart = (props) => {
  const { cart } = props;
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = product.quantity + totalQuantity;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;

  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items ordered:{totalQuantity}</h5>
      <table>
        <tbody>
          <tr>
            <td>Total : </td>
            <td>
              {dollarIcon}
              <span> {total.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <td>Shipping &amp; Handling : </td>
            <td>
              {dollarIcon}
              <span> {shipping.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <td>Tax : </td>
            <td>
              {dollarIcon}
              <span> {tax.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <td> Grand Total : </td>
            <td>
              {dollarIcon}
              <span> {grandTotal.toFixed(2)}</span>
            </td>
          </tr>
        </tbody>
      </table>
      {props.children}
    </div>
  );
};

export default Cart;
