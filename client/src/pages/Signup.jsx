import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-10">Sign Up</h1>
      <form className="flex justify-center flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          id="username"
          className="bg-amber-100 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-amber-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-amber-100 p-3 rounded-lg"
        />
        <button className="bg-amber-800 text-yellow-50 p-3 rounded-lg hover:opacity-85 ">
          Sign Up
        </button>
      </form>
      <div className="mt-3">
        Already have an account ?{" "}
        <Link to="/signin">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
