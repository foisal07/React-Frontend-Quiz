import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options, handleChange }) {
  console.log(options);
  return (
    <>
      <div className={classes.answers}>
        {options.map((option, index) => (
          <Checkbox
            text={`${option.title}`}
            className={classes.answer}
            onChange={handleChange}
            key={index}
            value={index}
          />
        ))}
      </div>
    </>
  );
}
