import React from "react";
const About = () => {
  return (
    <div>
      <HeroVideo />
    </div>
  );
};
export default About;

const HeroVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
  <source src="/videos/mock2.mp4" type="video/mp4" />
        Twoja przeglądarka nie obsługuje wideo.
      </video>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 text-white">
        <h1 className="text-4xl md:text-6xl font-bold"></h1>
      </div>
    </div>
  );
};
