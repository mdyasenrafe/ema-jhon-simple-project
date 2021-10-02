import { useEffect, useState } from "react";

const UseProduct = () => {
  const [products, setProdoucts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProdoucts(data));
  }, []);
  return [products, setProdoucts];
};

export default UseProduct;
