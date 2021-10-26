import { useEffect, useState } from "react";

const UseProduct = () => {
  const [products, setProdoucts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProdoucts(data.products));
  }, []);
  return [products, setProdoucts];
};

export default UseProduct;
