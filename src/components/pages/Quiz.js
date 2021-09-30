import { getDatabase, ref, set } from "@firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
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
  // get current user
  const { currentUser } = useAuth();

  const history = useHistory();

  // get video id from route url
  const { id } = useParams();

  // fetch questions
  const { loading, error, questions } = useQuestions(id);

  // set the question number that being rendered
  const [currrentQuestionID, setCurrrentQuestionID] = useState(0);

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
      questionIndex: currrentQuestionID,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  // next button clicked update current question number > rerenders and fetch options with next question
  function handleNextButton() {
    if (currrentQuestionID + 1 < questions.length) {
      setCurrrentQuestionID((prevCurrent) => prevCurrent + 1);
    }
  }

  // prev button clicked update current question number > rerenders and fetch options with next question
  function handlePrevButton() {
    if (currrentQuestionID >= 1 && currrentQuestionID <= questions.length) {
      setCurrrentQuestionID((prevCurrent) => prevCurrent - 1);
    }
  }

  // Calculate progress
  const progress =
    questions.length > 0
      ? ((currrentQuestionID + 1) / questions.length) * 100
      : 0;

  // Submit given answers to database
  async function submit() {
    // find which user has submitted the answers

    // get current user ID
    const { uid } = currentUser;

    // establish database connection and create current user submitted answers node

    // connect to database
    const db = getDatabase();

    // create given answer node for current user
    const submittedAnswerRef = ref(db, `result/${uid}`);

    // send the answers with videoID into database
    await set(submittedAnswerRef, {
      [id]: qna,
    });

    // redirect quiz page to result page and pass the data for analysis
    history.push({
      pathname: `/result/${id}`,
      state: {
        qna,
      },
    });
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currrentQuestionID].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currrentQuestionID].options}
            handleChange={handleAnswer}
          />
          <ProgressBar
            nextQuestion={handleNextButton}
            prevQuestion={handlePrevButton}
            progress={progress}
            submit={submit}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
