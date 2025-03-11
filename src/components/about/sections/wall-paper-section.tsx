import { Paper } from "@mui/material";
import Image from "next/image";
import React from "react";

export const WallPaperSection = () => {
  return (
    <Paper
      elevation={0}
      className="relative h-[100vh]  w-full"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/videos/mockvideo.mp4"
          type="video/mp4"
        />
        Twoja przeglądarka nie obsługuje wideo.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 text-white flex-col">
        <Image
          height={330}
          width={740}
          src="/pictures/logo2.png"
          alt="logo"
        />
      </div>
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
