import React from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from '../components/Button'

export default function ProgressBar() {
  return (
    <>
      <div className={classes.progressBar}>
        <div className={classes.backButton}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={classes.rangeArea}>
          <div className={classes.tooltip}>24% Cimplete!</div>
          <div className={classes.rangeBody}>
            <div className={classes.progress}></div>
          </div>
          {/* style={'width: 20%} */}
        </div>
        <a href="result.html">
          <Button className={`${classes.button} next`}>
            <span>Next Question</span>
            <span className="material-icons-outlined"> arrow_forward </span>
          </Button>
        </a>
      </div>
    </>
  );
}
