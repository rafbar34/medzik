import { Paper } from "@mui/material";
import React from "react";

export const WallPaperSection = () => {
  return (
    <Paper
      elevation={0}
      className="relative h-[100vh] bg-[url(/pictures/mock4.png)] bg-cover  w-full mb-16"
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 text-white">
        <h1 className="text-md md:text-6xl font-bold text-center">
        Projektujemy Twoją przyszłość
        </h1>
      </div>
    </Paper>
  );
};

{
  /* <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
<source src="/videos/mock2.mp4" type="video/mp4" />
    Twoja przeglądarka nie obsługuje wideo.
  </video> */
}
