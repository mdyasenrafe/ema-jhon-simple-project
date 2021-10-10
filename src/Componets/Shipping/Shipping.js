import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../Context/UseAuth";
import "./Shipping.css";

const Shipping = () => {
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
          placeholder="Enter Your Address"
          defaultValue=""
          {...register("address", { required: true })}
        />
        {errors.address && (
          <span className="error">This field is required</span>
        )}
        <input
          placeholder="Enter Your Address"
          defaultValue=""
          {...register("city", { required: true })}
        />
        {errors.city && <span className="error">This field is required</span>}

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
