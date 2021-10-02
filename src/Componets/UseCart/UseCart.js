import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const UseCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products.length) {
      const getdbProducts = getStoredCart();
      let storeCart = [];
      for (const key in getdbProducts) {
        const addedProduct = products.find((prod) => prod.key === key);
        const quantity = getdbProducts[key];
        addedProduct.quantity = quantity;
        storeCart.push(addedProduct);
      }
      setCart(storeCart);
    }
  }, [products]);
  return [cart, setCart];
};

export default UseCart;
