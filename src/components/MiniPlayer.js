import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer({ videoID, title }) {
  const floatingButtonRef = useRef();
  const [open, setOpen] = useState(false);
  const videoURL = `https://www.youtube.com/watch?v=${videoID}`;

  console.log(videoURL);
  function toogleMiniPlayer() {
    if (!open) {
      floatingButtonRef.current.classList.remove(classes.floatingBtn);
      setOpen(true);
    } else {
      floatingButtonRef.current.classList.add(classes.floatingBtn);
      setOpen(false);
    }
  }

  return (
    <>
      <div
        className={`${classes.miniPlayer} ${classes.floatingBtn}`}
        onClick={toogleMiniPlayer}
        ref={floatingButtonRef}
      >
        <span className={`material-icons-outlined ${classes.open}`}>
          play_circle_filled
        </span>
        <span
          className={`material-icons-outlined ${classes.close}`}
          onClick={toogleMiniPlayer}
        >
          close
        </span>

        <ReactPlayer
          className={classes.player}
          url={videoURL}
          playing={open}
          width="300px"
          height="168px"
          controls
        />
        <p>{title}</p>
      </div>
    </>
  );
}
