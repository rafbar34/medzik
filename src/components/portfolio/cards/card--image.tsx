import { Box, Card } from "@mui/material";
import React from "react";

export const CardImage = ({ data }: {   data: Array<{ src: string; alt: string }>; }) => {
  return (
    <Card
      elevation={2}
      className=" relative  w-1/2"
    >
      <Box className="absolute inset-0 bg-white opacity-40">
        <img
          src={data[0].src}
          alt={data[0].alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </Box>{" "}
    </Card>
  );
};
