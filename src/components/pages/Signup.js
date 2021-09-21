import React from "react";
import signupImage from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from '../SignupForm'

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration src={`${signupImage}`} alt="signupImage" />
        <SignupForm />
      </div>
    </>
  );
}
