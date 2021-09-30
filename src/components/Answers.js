import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options, handleChange }) {
  return (
    <>
      <div className={classes.answers}>
        {options.map((option, index) => (
          <Checkbox
            text={`${option.title}`}
            className={classes.answer}
            onChange={(e) => handleChange(e, index)}
            key={index}
            value={index}
            checked = {option.checked}
          />
        ))}
      </div>
    </>
  );
}
