import React from "react";


export default function Advertisement() {
  return (
    <div className="ads-restaurant-frame">
      <video
        className="ads-video"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      >
        <source src="/img/banner2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

