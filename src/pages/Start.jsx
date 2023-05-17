import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import YoutubeBackground from "react-youtube-background";
import { useNavigate } from "react-router-dom";

function Start() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isMounted && containerWidth > 0) {
            navigate("/Start");
        }
    }, [containerWidth, isMounted, navigate]);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            setContainerWidth(container.clientWidth);
            setIsMounted(true);
        }
    }, [containerRef, setContainerWidth, setIsMounted]);

    return (
        <YoutubeBackground
            style={{ position: "absolute", width: "100%", height: "100vh" }}
            videoId="yBR9u7JZCig"
            
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
                <img
                    width="500px"
                    onClick={() => navigate("/login")}
                    alt=""
                />
            </div>
        </YoutubeBackground>
    );
}

export default Start
