import React, { useEffect, useRef, useState } from "react";
import YoutubeBackground from "react-youtube-background";
import { useNavigate } from "react-router-dom";
import audio from "../audio/main.mp3";

function Start() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted && containerWidth > 0) {
      navigate("/start");
    }
  }, [containerWidth, isMounted, navigate]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setContainerWidth(container.clientWidth);
      setIsMounted(true);
    }
  }, [containerRef, setContainerWidth, setIsMounted]);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleScreenClick = () => {
    navigate("/login");
  };

  return (
    <YoutubeBackground
      style={{ position: "absolute", width: "100%", height: "100vh" }}
      videoId="Bh3fn9ywHQQ"
      className="my-class"
      onReady={() => console.log("Player is ready")}
      onEnd={() => console.log("Video has ended")}
      mute={false}
      stopOnUnmount={true}
      setIsMounted={setIsMounted}
    >
      <div
        style={{
          position: "fixed",
          top: "90%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none",
        }}
        ref={containerRef}
      >
        <audio src={audio} loop autoPlay />
        <img width="500px" onClick={handleLoginClick} alt="" />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
        onClick={handleScreenClick}
      ></div>
    </YoutubeBackground>
  );
}

export default Start;
