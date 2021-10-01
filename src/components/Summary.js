import React from "react";
import successImage from "../assets/images/success.png";
import classes from "../styles/Sumarry.module.css";

export default function Summary({ score, noq }) {
  return (
    <>
      <div className={classes.summary}>
        <div className={classes.point}>
          {/* <!-- progress bar will be placed here --> */}
          <p className={classes.score}>
            Your score is <br /> {score} out of {noq * 5}
          </p>
        </div>

        <div className={classes.badge}>
          <img src={successImage} alt="Success" />
        </div>
      </div>
    </>
  );
}
