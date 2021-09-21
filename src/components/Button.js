import React from "react";
import classes from '../styles/Button.module.css'

export default function Button({children}) {
  return (
    <>
      <button className={classes.button} >
        {children}
      </button>
    </>
  );
}
