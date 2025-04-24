import { useEffect, useRef, useState } from "react";

/**
 * React Based Scenario Question Interview
 * 
 * Implement a watch history that only add a video if the user watched this video for at least 10 seconds.
 * 
 */

export default function Video() {
  const videoRef = useRef(null);
  const [watchHistory, setWatchHistory] = useState([]);
  const [watched, setWatched] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 10 && !watched) {
        setWatched(true);
        setWatchHistory((prev) => [...prev, "cat.mp4"]);
      }
    };

    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [watched]);

  return (
    <div>
      <video ref={videoRef} width="600" controls>
        <source src="/cat.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      <h2>Watch History</h2>
      <ul>
        {watchHistory.map((videoTitle, index) => (
          <li key={index}>Watched: {videoTitle}</li>
        ))}
      </ul>
    </div>
  );
}
