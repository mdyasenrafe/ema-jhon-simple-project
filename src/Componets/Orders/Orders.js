import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UseAuth from "../../Context/UseAuth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = UseAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <h1>This is Orders Page {orders.length}</h1>
    </div>
  );
};

export default Orders;
