import React from "react";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const answers = useAnswers();
  console.log(answers);
  return (
    <>
      <Summary />
      <Analysis />
    </>
  );
}
