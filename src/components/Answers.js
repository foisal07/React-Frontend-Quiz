import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from '../components/Checkbox'

export default function Answers({ options, handleChange, input }) {
  console.log(options);
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <>
          {input ? (
            <Checkbox
              key={index}
              className={classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              text={`${option.title}`}
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              key={index}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </>
      ))}
    </div>
  );
}
