import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../assert/facebook-logo.png";
import GoogleIcon from "../assert/google.png";
// import axios from "axios";
import "./login.css";
import { getRandomQuote } from "./quoteService";
const Login = (props) => {
  console.log(props, "hello");
  const { hasExistingAccount, toggleForm } = props;
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    getRandomQuoteAndSetTimeout();
  }, []);

  const getRandomQuoteAndSetTimeout = async () => {
    await setRandomQuoteAndUpdateTimeout();
  };

  const setRandomQuoteAndUpdateTimeout = async () => {
    const quote = await getRandomQuote();
    if (quote) {
      setRandomQuote(quote);
    }
    await new Promise((resolve) => setTimeout(resolve, 60000));
    await setRandomQuoteAndUpdateTimeout();
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  const greeting = getGreeting();

  return (
    <div className="flex h-[600px] items-center justify-around w-full">
      <div className=" w-[40%] h-[600px] flex flex-col items-center justify-center">
        <div>
          <h1 className="text-blue-700 text-2xl">
            {greeting} Welcome to Bookbite🤗!
          </h1>
        </div>
        <quote className="text-2xl"> {randomQuote}</quote>
      </div>
      <div className="w-[60%] h-[600px] flex items-center justify-center">
        <form className="w-[60%] justify-between items-center background p-4 custom-border-radius">
          <div className="">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="w-[60%] flex items-center gap-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Log In
            </button>
            {hasExistingAccount && (
              <Link
                to="/signup"
                className="font-bold text-sm text-blue-500 hover:text-blue-800"
                onClick={toggleForm}
              >
                Need an account? Sign Up
              </Link>
            )}
          </div>
          <div className="w-[100%] flex justify-center items-center -mt-1 text-white font-bold">
            Or log in with
          </div>
          <div className="w-[100%] flex item-center justify-center gap-2 leading-3">
            <img src={GoogleIcon} alt="facebook" width="30px" height="30px" />
            <img src={FacebookIcon} alt="google" width="30px" height="30px" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
