import React from "react";
import { useParams } from "react-router";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

export default function Quiz() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
