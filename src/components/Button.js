import React from "react";
import classes from '../styles/Button.module.css'

export default function Button({children, ...rest}) {
  return (
    <>
      <button className={classes.button} {...rest}>
        {children}
      </button>
    </>
  );
}
