import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //fetch videos
    async function fetchVideos() {
      // connect and set request for database
      const database = getDatabase();
      const videoRef = ref(database, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(10)
      );

      try {
        setError(false);
        //send rquest to database
        const result = await get(videoQuery);
        if (result.exists()) {
          setLoading(true);
          //update the local state with fetched videos
          setVideos((prevVideos) => {
            return [...prevVideos, Object.values(result.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }

    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
}
