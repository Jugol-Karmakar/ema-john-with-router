import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-full w-80 mx-auto border-2 shadow-md  mt-10 rounded-lg">
      <h1 className="text-3xl font-semibold text text-center py-3">Login</h1>

      <form>
        <div className="my-3 mx-6">
          <label className="block pb-1" htmlFor="email">
            Email
          </label>
          <input
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
            className="py-1 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
            type="password"
            name="Password"
            id=""
            required
          />
        </div>
        <div className=" flex justify-center mt-9 px-6">
          <input
            className="bg-orange-300 w-full py-2 text-semibold cursor-pointer"
            type="submit"
            value="Login"
          ></input>
        </div>
      </form>
      <p className="text-xs text-center mt-3 ">
        New to Ema-John?{" "}
        <Link className="text-yellow-600 text-bold" to="/signup">
          Create New Account
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

export default Login;
