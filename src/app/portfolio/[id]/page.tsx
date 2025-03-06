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
    alt: "house223",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house323",
  },  {
    src: "/pictures/mock4.jpg",
    alt: "house233",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house313213",
  },

];


const PAGE_CONTENT_QUERY = `
  query Home {
    test12 {
      title
      description {
        value
      }
    }
  }`;
const PortfolioCard = () => {
      const [isMobileDevice, setIsMobileDevice] = React.useState(false);
      const [cardData, setCardData] = React.useState<Array<object | undefined>>([]);
      
      
      
      React.useEffect(() => {
        const getData =async()=>{
            const res = await fetch(`${process.env.API_TOKEN}`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${process.env.API_TOKEN}`,
                'Content-Type': 'application/json',
                 "Accept": "application/json",
                 "X-Api-Version": "3"
              },
            });
          
          setCardData(await res.json() ?? [])
       }
       getData()
      }, []);

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
