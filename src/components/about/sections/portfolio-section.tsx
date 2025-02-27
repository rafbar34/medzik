/* eslint-disable @next/next/no-img-element */
import { CustomButton } from "@/components/common/button/button";
import { Header } from "@/components/common/text/header";
import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";

const data = [
  {
    src: "/pictures/mock3.jpg",
    alt: "house1",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house2",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house3",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house4",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house5",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house6",
  },
];
export const PortfolioDemoSection = () => {
  return (
    <Box className="mb-16 ">
      <Header title="Portfolio" />

      <ImageList
        sx={{ width: "100%", height: "100%" }}
        cols={3}
      >
        {data.map((item) => (
          <ImageListItem key={item.alt}>
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box className="w-full flex justify-center  relative z-10 mt-5">
        <CustomButton
        className="font-medium p-2"
          width={"1/5"}
          title="Zobacz więcej"
        />
      </Box>
    </Box>
  );
};
