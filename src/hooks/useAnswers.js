import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    //fetch Answers
    async function fetchAnswers() {
      // connect and set request for database
      const database = getDatabase();
      const answerRef = ref(database, "answers/" + videoID + "/questions");
      const answerQuery = query(answerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        //send rquest to database
        const result = await get(answerQuery);
        setLoading(false);
        if (result.exists()) {
          //update the local state with fetched Answers
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(result.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }

    fetchAnswers();
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
}
