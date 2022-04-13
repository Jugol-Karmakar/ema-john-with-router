import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handelNameBlur = (e) => {
    setName(e.target.value);
  };

  const handelAddressBlur = (e) => {
    setAddress(e.target.value);
  };

  const handelPhoneBlur = (e) => {
    setPhone(e.target.value);
  };

  const handelShippingSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-96 mx-auto border-2 rounded-lg mt-10">
      <h2 className="text-center pt-3 font-semibold text-xl">
        Shipping Information
      </h2>
      <form onSubmit={handelShippingSubmit}>
        <div className="my-3 mx-6">
          <label className="block pb-1" htmlFor="name">
            Name
          </label>
          <input
            onBlur={handelNameBlur}
            className="py-1 px-2 outline-none rounded-md border-grey-400 border  w-full"
            type="text"
            name="Name"
            id=""
            required
          />
        </div>
        <div className="my-3 mx-6">
          <label className="block pb-1" htmlFor="email">
            Email
          </label>
          <input
            value={user?.email}
            readOnly
            className="py-1 px-2 outline-none rounded-md border-grey-400 border  w-full"
            type="email"
            name="email"
            id=""
            required
          />
        </div>
        <div className="my-3 mx-6">
          <label className="block pb-1" htmlFor="address">
            Address
          </label>
          <input
            onBlur={handelAddressBlur}
            className="py-1 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
            type="text"
            name="text"
            id=""
            required
          />
        </div>
        <div className="my-3 mx-6">
          <label className="block pb-1" htmlFor="phone">
            Phone
          </label>
          <input
            onBlur={handelPhoneBlur}
            className="py-1 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
            type="text"
            name="text"
            id=""
            required
          />
        </div>

        <div className=" flex justify-center mt-9 px-6 mb-5">
          <input
            className="bg-orange-500 text-white w-full py-2 text-semibold cursor-pointer"
            type="submit"
            value="Add Shipping"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Shipment;
