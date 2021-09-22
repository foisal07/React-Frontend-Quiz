import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList() {
  const [videos, setVideos] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //fetch videos
    async function fetchVideos() {
      // connect and set request for database
      const database = getDatabase();
      const videoRef = ref(database, "videos");
      const videoQuery = query(videoRef, orderByKey());

      try {
        //send rquest to database
        const result = await get(videoQuery);
        if (result.exists()) {
          setLoading(false);
          //update the local state with fetched videos
          setVideos((prevVideos) => [...prevVideos, Object.values(result.val)]);
        } else {
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);
}
