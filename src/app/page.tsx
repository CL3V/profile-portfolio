import React from "react";

import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      {/* <video
        className="bg-video__content position: fixed -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1098340/ed0f1be27eab79d06a54fe9657d49a5fee0e12c8.mp4"
          type="video/mp4"
        />
      </video> */}
      <Profile />
    </main>
  );
}
