import React, { useState } from "react";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

const GetStarted = () => {
  const [hasExistingAccount, setHasExistingAccount] = useState(false);
  const toggleForm = () => {
    setHasExistingAccount((prevState) => !prevState);
  };
  const handleLogin = () => {
    // Handle the login logic
  };

  const handleSignUp = () => {
    // Handle signup logic
  };
  return (
    <div>
      <h1>Get Started Page</h1>
      {hasExistingAccount ? (
        <Login
          toggleForm={toggleForm}
          hasExistingAccount={hasExistingAccount}
        />
      ) : (
        <Signup
          toggleForm={toggleForm}
          hasExistingAccount={hasExistingAccount}
        />
      )}
    </div>
  );
};

export default GetStarted;
