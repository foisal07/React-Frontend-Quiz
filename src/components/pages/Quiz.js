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
    case "answered":
      // deep copy whole question object to manipulate (keeping data safe)
      const questions = _.cloneDeep(state);

      // find option and mark checked true
      questions[action.questionIndex].options[
        action.optionIndex
      ].checked = true;

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
  function handleAnswer(e, index) {
    dispatch({
      type: "answered",
      questionIndex: currrentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  // next button clicked update current question number > rerenders and fetch options with next question
  function handleNextButton() {
    if (currrentQuestion + 1 < questions.length) {
      setCurrrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }

  // prev button clicked update current question number > rerenders and fetch options with next question
  function handlePrevButton() {
    if (currrentQuestion >= 1 && currrentQuestion <= questions.length) {
      setCurrrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currrentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currrentQuestion].options}
            handleChange={handleAnswer}
          />
          <ProgressBar
            nextQuestion={handleNextButton}
            prevQuestion={handlePrevButton}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
