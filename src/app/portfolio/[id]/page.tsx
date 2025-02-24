"use client";
import { MarginTopSpacer } from "@/components/common/margin-top-spacer";
import { CarDescription } from "@/components/portfolio/cards/card--description";
import { CardImage } from "@/components/portfolio/cards/card--image";
import { CardListImages } from "@/components/portfolio/cards/card--list-images";
import { Box } from "@mui/material";
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
    alt: "house64",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house63",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house62",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house61",
  },
];

const PortfolioCard = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MarginTopSpacer>
      <Box className="p-10">
        <Box className="flex justify-evenly h-full">
          <CarDescription />
          <CardImage data={data} />
        </Box>
        <CardListImages
          data={data}
          handleClick={handleClick}
          isOpen={isOpen}
        />
      </Box>
    </MarginTopSpacer>
  );
};
export default PortfolioCard;
