import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />;

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let totalFixed = 0;
  for (const product of cart) {
    total = total + product.price;
    totalFixed = total.toFixed(2);
  }
  const shiping = totalFixed > 0 ? 15 : 0;
  const tax = (totalFixed + shiping) * 0.15;
  const taxFixed = tax.toFixed(2);
  const grandTotal = shiping + total + tax;
  const grandTotalFixed = grandTotal.toFixed(2);

  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items ordered:{props.cart.length}</h5>
      <table>
        <tbody>
          <tr>
            <td>Total : </td>
            <td>
              {dollarIcon}
              <span> {totalFixed}</span>
            </td>
          </tr>
          <tr>
            <td>Shipping &amp; Handling : </td>
            <td>
              {dollarIcon}
              <span> {shiping}</span>
            </td>
          </tr>
          <tr>
            <td>Tax : </td>
            <td>
              {dollarIcon}
              <span> {taxFixed}</span>
            </td>
          </tr>
          <tr>
            <td> Grand Total : </td>
            <td>
              {dollarIcon}
              <span> {grandTotalFixed}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
