import React from "react";
import classes from "../styles/Analysis.module.css";
import Question from "./Questions";

export default function Analysis({ answers = [] }) {
  console.log(answers);
  return (
    <>
      <div className={classes.analysis}>
        <h1>Question Analysis</h1>
      </div>
      <Question answers={answers} />
    </>
  );
}
