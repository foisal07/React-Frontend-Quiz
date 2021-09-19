import React from "react";
import Answers from "../components/Answers";

export default function Analysis() {
  return (
    <>
      <div className="question">
        <div className="qtitle">
          <span className="material-icons-outlined"> help_outline </span> Here
          goes the question from Learn with Sumit?
        </div>
      </div>
      <Answers />

      <div className="question">
        <div className="qtitle">
          <span className="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
      </div>
      <Answers />
    </>
  );
}
