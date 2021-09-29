import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [questions, setQuestions] = useState([]);
  

  useEffect(() => {
    //fetch questions
    async function fetchQuestions() {
      // connect and set request for database
      const database = getDatabase();
      const quizRef = ref(database, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        //send rquest to database
        const result = await get(quizQuery);
        setLoading(false);
        if (result.exists()) {
          //update the local state with fetched questions
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(result.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
