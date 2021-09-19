import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <>
      <div className={classes.answers}>
        <Checkbox text="A new hope1" className={classes.answer}/>
        <Checkbox text="A new hope2" className={classes.answer}/>
        <Checkbox text="A new hope3" className={classes.answer}/>
        <Checkbox text="A new hope4" className={classes.answer}/>
        <Checkbox text="A new hope5" className={classes.answer}/>
        <Checkbox text="A new hope6" className={classes.answer}/>
        <Checkbox text="A new hope7" className={classes.answer}/>
        <Checkbox text="A new hope8" className={classes.answer}/>
        <Checkbox text="A new hope9" className={classes.answer}/>
      </div>
    </>
  );
}
