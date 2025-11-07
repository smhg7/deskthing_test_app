import React from "react";

export default function App() {
  return (
    <div style={wrapperStyle}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3pxrECZYEAA?start=30"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={iframeStyle}
      ></iframe>
    </div>
  );
}

const wrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  margin: 0,
  background: "#111",
};

const iframeStyle = {
  maxWidth: "100%",
  width: "560px",
  height: "315px",
  border: "none",
};
