import React, { useReducer, useState, useEffect } from "react";
import { useParams } from "react-router";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const intialstate = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    

    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);

  const [currrentQuestion, setCurrrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, intialstate);

  useEffect(() => {
    dispatch({
      type: 'questions',
      value: questions
    })
  }, [questions])

  console.log(qna);

  return (
    <>
      <h1></h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
