import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const intialstate = null;

const reducer = (state, action) => {
  switch (action.type) {
    // mark questions checked false and returns question
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    //mark answer checked true
    case "answer":
      // deep copy whole question object to manipulate (keeping data safe)
      const questions = _.cloneDeep(state);

      // find option and mark checked true
      questions[action.questionIndex].options[
        action.optionIndex
      ].checked = true;

      console.log(questions);
      return questions;
    default:
      return state;
  }
};

export default function Quiz() {
  // get video id from route url
  const { id } = useParams();

  // fetch questions
  const { loading, error, questions } = useQuestions(id);

  console.log(questions);

  // set the question number that being rendered
  const [currrentQuestion, setCurrrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, intialstate);

  // on load dispatch question to mark checked false
  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  // get clicked option and dispatch the option to mark checked true
  function handleAnswer (e, index) {
    dispatch({
      type: "answered",
      questionIndex: currrentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }
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
