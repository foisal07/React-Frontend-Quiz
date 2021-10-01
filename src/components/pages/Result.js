import _ from "lodash";
import React, { Fragment } from "react";
import { useHistory, useParams } from "react-router";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  // get video id
  const { id } = useParams();

  // fetch stored correct answers for that video from database
  const { loading, error, answers } = useAnswers(id);
  console.log(answers);

  // get answers given by user
  const { location } = useHistory();
  const { state } = location;
  const { qna } = state;
  console.log(qna);

  // compare correct answer and given answer to calculate score
  function calculateScore() {
    let score = 0;

    // take out and create correct answers options and given answers options array
    answers.forEach((question, questionIndex) => {
      let correctOptionIndexes = [],
        givenOptionIndexes = [];
      console.log(question);
      console.log(correctOptionIndexes);
      console.log(givenOptionIndexes);

      question.options.forEach((option, optionIndex) => {
        if (option.correct) correctOptionIndexes.push(optionIndex);
        if (qna[questionIndex].options[optionIndex].checked) {
          givenOptionIndexes.push(optionIndex);
          // mark the given question option checked true to show it as correct in analysis component
          option.checked = true;
        }
      });
      if (_.isEqual(correctOptionIndexes, givenOptionIndexes)) {
        score = score + 5;
      }
      console.log(score);
    });

    return score;
  }

  const userScore = calculateScore();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {!loading && answers && answers.length > 0 && (
        <Fragment>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers = {answers}/>
        </Fragment>
      )}
    </>
  );
}
