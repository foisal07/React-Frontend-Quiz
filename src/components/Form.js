import React from "react";
import classes from "../styles/Form.module.css";

export default function Form({ children, className, ...rest }) {
  console.log(children);
  return (
    <>
      <form className={`${className} ${classes.form}`} action="#">
        {children}
      </form>
    </>
  );
}
