import React, { useRef, useState } from "react";
import Button from "../components/Button";
import classes from "../styles/ProgressBar.module.css";

export default function ProgressBar({
  nextQuestion,
  prevQuestion,
  progress,
  submit,
}) {
  const tooltipRef = useRef();
  const [tooltip, setTooltip] = useState(false);

  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }

  return (
    <>
      <div className={classes.progressBar}>
        <div className={classes.backButton} onClick={prevQuestion}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={classes.rangeArea}>
          <div className={classes.tooltip} ref={tooltipRef}>
            {progress}% Complete!
          </div>
          <div className={classes.rangeBody}>
            <div
              className={classes.progress}
              style={{ width: `${progress}%` }}
              onMouseOver={toggleTooltip}
              onMouseDown={toggleTooltip}
            ></div>
          </div>
        </div>
        <Button onClick={progress === 100 ? submit : nextQuestion}>
          <span>{progress === 100 ? "Submit" : "Next"} Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </div>
    </>
  );
}
