import { Paper } from "@mui/material";
import React from "react";

export const WallPaperSection = () => {
  return (
<Paper elevation={0} className="relative mt-14 min-h-[270px] sm:w-full sm:min-h-screen sm:mt-0  w-full">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/produkcja1.mp4" type="video/mp4" />
    Twoja przeglądarka nie obsługuje wideo.
  </video>
</Paper>
  );
};

// {
//   <video
//     className="absolute top-0 left-0 w-full h-full object-cover"
//     autoPlay
//     loop
//     muted
//     playsInline
//   >
//     <source
//       src="/videos/mock2.mp4"
//       type="video/mp4"
//     />
//     Twoja przeglądarka nie obsługuje wideo.
//   </video>;
// }
