import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../Context/UseAuth";
import swal from "sweetalert";
import "./Shipping.css";
import { getStoredCart, clearTheCart } from "../../utilities/fakedb";
import useCart from "../UseCart/UseCart";
const Shipping = () => {
  const [cart, setCart] = useCart();
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.order = savedCart;
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          reset();
          clearTheCart();
          setCart([]);
          swal({
            title: "Your Item is order processed successfully",
            icon: "success",
            button: "OK",
          });
        }
      });
  };

  return (
    <div>
      <form className="from" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter Your Name"
          defaultValue={user.displayName}
          {...register("name")}
        />

        <input
          placeholder="Enter Your Email"
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input
          placeholder="Enter Your City"
          defaultValue=""
          {...register("city", { required: true })}
        />
        {errors.city && <span className="error">This field is required</span>}
        <input
          placeholder="Enter Your Address"
          defaultValue=""
          {...register("address", { required: true })}
        />
        {errors.address && (
          <span className="error">This field is required</span>
        )}

        <input
          placeholder="Enter Your Phone Number"
          defaultValue=""
          {...register("number", { required: true })}
        />
        {errors.number && <span className="error">This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
