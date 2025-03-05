'use client'
import { CardDescription } from "@/components/portfolio/cards/card--description";
import { CardImage } from "@/components/portfolio/cards/card--image";
import { CardImages } from "@/components/portfolio/cards/card--images";
import { Box } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";

const data = [
  {
    src: "/pictures/mock3.jpg",
    alt: "house1",
  },
  {
    src: "/pictures/mock4.jpg",
    alt: "house2",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house3",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house3",
  },  {
    src: "/pictures/mock4.jpg",
    alt: "house2",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house3",
  },

];

const PortfolioCard = () => {
      const [isMobileDevice, setIsMobileDevice] = React.useState(false);
    
      React.useEffect(() => {
        setIsMobileDevice(isMobile);
      }, []);
  return (
    <Box
    sx={{
      backgroundImage: "url('/pictures/mock7.jpg')",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    }}
    className="sm:p-10 pt-20">
      <Box className="flex sm:flex-row flex-col justify-evenly h-full">
        <CardDescription />
        {!isMobileDevice&&
          <CardImage data={data} />
        }
      </Box>
      <CardImages
      isMobileDevice={isMobileDevice}
        data={data}
        id={String(Math.random() * 1000)}
      />
    </Box>
  );
};
export default PortfolioCard;
