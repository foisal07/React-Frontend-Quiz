import React from "react";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import loginImage from "../../assets/images/login.svg";
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div class="column">
        <Illustration src={`${loginImage}`} alt="loginImage" />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>Submit Now</Button>

          <div class="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}
