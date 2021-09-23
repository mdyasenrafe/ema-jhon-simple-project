import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />;

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipingTax = 0;
  let shipingTaxFixed = 0;
  for (const product of cart) {
    total = total + product.price;
    shipingTax = shipingTax + product.shipping;
    shipingTaxFixed = shipingTax.toFixed(2);
    console.log(shipingTaxFixed);
  }
  console.log(cart);
  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items ordered:{props.cart.length}</h5>
      <table>
        <tbody>
          <tr>
            <td>Total :</td>
            <td>
              {dollarIcon}
              <span> {total}</span>
            </td>
          </tr>
          <tr>
            <td>Shipping &amp; Handling :</td>
            <td>
              {dollarIcon}
              <span> {shipingTaxFixed}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
