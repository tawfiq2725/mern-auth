import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({});
  const [Loding, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleForm = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await axios.post(`http://localhost:8000/auth/signup`, data);
      console.log("user created successfully");
      setLoading(false);
      setError(false);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("There something problem while signup " + error);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      {error && (
        <div className="bg-red-300 opacity-75 p-3">
          <p className="text-red-700">Something went wrong</p>
        </div>
      )}
      <h1 className="text-3xl text-center font-semibold my-10">Sign Up</h1>
      <form
        className="flex justify-center flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          id="user_name"
          className="bg-amber-100 p-3 rounded-lg"
          onChange={handleForm}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-amber-100 p-3 rounded-lg"
          onChange={handleForm}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-amber-100 p-3 rounded-lg"
          onChange={handleForm}
        />
        <button className="bg-amber-800 text-yellow-50 p-3 rounded-lg hover:opacity-85 ">
          {Loding ? "Loading..." : "Signup"}
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
