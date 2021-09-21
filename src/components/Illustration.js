import React from "react";
import classes from "../styles/Illustration.module.css";

export default function Illustration({src, alt}) {
  
  return (
    <div className={classes.illustration}>
      <img src={src} alt={alt} />
    </div>
  );
}
