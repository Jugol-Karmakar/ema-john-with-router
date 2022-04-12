import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handelEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handelPasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handelConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    navigate("/shop");
  }
  const handelCreateUser = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="min-h-full w-80 mx-auto border-2 shadow-md  mt-10 rounded-lg mb-20">
      <h1 className="text-3xl font-semibold text text-center py-3">Sign Up</h1>

      <form onSubmit={handelCreateUser}>
        <div className="my-3 mx-6">
          <label className="block pb-1" htmlFor="email">
            Email
          </label>
          <input
            onBlur={handelEmailBlur}
            className="py-1 px-2 outline-none rounded-md border-grey-400 border  w-full"
            type="email"
            name="email"
            id=""
            required
          />
        </div>
        <div className="my-3 mx-6">
          <label className="block pb-1" htmlFor="password">
            Password
          </label>
          <input
            onBlur={handelPasswordBlur}
            className="py-1 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
            type="password"
            name="Password"
            id=""
            required
          />
        </div>
        <div className="my-3 mx-6">
          <label className="block pb-1" htmlFor="confirm-password">
            confirm password
          </label>
          <input
            onBlur={handelConfirmPassword}
            className="py-1 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
            type="password"
            name="confirm-Password"
            id=""
            required
          />
          <p>{error}</p>
        </div>
        <div className=" flex justify-center mt-9 px-6">
          <input
            onClick={() => createUserWithEmailAndPassword()}
            className="bg-orange-300 w-full py-2 text-semibold cursor-pointer"
            type="submit"
            value="Sign Up"
          ></input>
        </div>
      </form>
      <p className="text-xs text-center mt-3 ">
        Already have an account?{" "}
        <Link className="text-yellow-600 text-bold" to="/login">
          Login
        </Link>
      </p>

      <div className="flex justify-center items-center my-4">
        <div className="border-t border-gray-400 w-24"></div>
        <span className="px-4 text-gray-500">or</span>
        <div className="border-t border-gray-400 w-24"></div>
      </div>

      <div className="flex justify-center">
        <button className="border px-5 py-2 w-full mx-6 mb-5 text-semibold">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
