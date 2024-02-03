import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../assert/facebook-logo.png";
import GoogleIcon from "../assert/google.png";
import "./login.css"; // Assuming you have a signup.css file for styling
import { getRandomQuote } from "./quoteService";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [randomQuote, setRandomQuote] = useState("");

  const handleSignUp = () => {
    // Handle signup logic
  };

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
          {/* First Name */}
          <div className="flex w-full justify-between">
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {/* Form buttons */}
          <div className="w-[100%] flex items-center gap-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <Link
              to="/login"
              className="font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Already have an account? Log In
            </Link>
          </div>

          {/* Social login buttons */}
          <div className="w-[100%] flex justify-center items-center -mt-1 text-white font-bold">
            Or sign up with
          </div>
          <div className="w-[100%] flex item-center justify-center gap-2 leading-3">
            <img src={GoogleIcon} alt="google" width="30px" height="30px" />
            <img src={FacebookIcon} alt="facebook" width="30px" height="30px" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
