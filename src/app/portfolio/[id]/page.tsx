import { MarginSpacer } from "@/components/common/margin-top-spacer";
import { CardDescription } from "@/components/portfolio/cards/card--description";
import { CardImage } from "@/components/portfolio/cards/card--image";
import { CardImages } from "@/components/portfolio/cards/card--images";
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
  return (
    <Box
    sx={{
      backgroundImage: "url('/pictures/mock7.jpg')",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    }}
    className="p-10 pt-20">
      <Box className="flex justify-evenly h-full">
        <CardDescription />
        <CardImage data={data} />
      </Box>
      <CardImages
        data={data}
        id={String(Math.random() * 1000)}
      />
    </Box>
  );
};
export default PortfolioCard;
