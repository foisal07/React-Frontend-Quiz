import React from "react";
import Button from "../components/Button";
import classes from "../styles/ProgressBar.module.css";

export default function ProgressBar({ nextQuestion, prevQuestion }) {
  return (
    <>
      <div className={classes.progressBar}>
        <div className={classes.backButton} onClick={prevQuestion}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={classes.rangeArea}>
          <div className={classes.tooltip}>25% Complete!</div>
          <div className={classes.rangeBody}>
            <div className={classes.progress} style={{ width: "20%" }}></div>
          </div>
        </div>
        <Button onClick={nextQuestion}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </div>
    </>
  );
}
