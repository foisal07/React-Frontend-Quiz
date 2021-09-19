import React from "react";
import classes from '../styles/Button.module.css'

export default function Button({children}) {
  return (
    <>
      <div className={classes.button} >
        {children}
      </div>
    </>
  );
}
