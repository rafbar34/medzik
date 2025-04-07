"use client";
import { CardDescription } from "@/components/portfolio/cards/card--description";
import { CardImage } from "@/components/portfolio/cards/card--image";
import { CardImages } from "@/components/portfolio/cards/card--images";
import { Box, CircularProgress } from "@mui/material";
import React, { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useParams } from "next/navigation";

type CardDataType = {
  data: {
    attributes: {
      text1: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        document: any;
      };
      text2: string;
      title: string;
      images: [
        {
          upload_id: string;
          alt: string;
          custom_data: {
            url: string | undefined;
          };
        },
      ];
    };
  };
};

const PortfolioCard = () => {
  const { id } = useParams<{ id: string }>();
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = React.useState<CardDataType | null>(null);
  const ref = useRef(null);

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Api-Version": "3",
        },
      });
      setCardData((await res.json()) ?? []);
      setLoading(false);
    };
    getData();
  }, []);

  React.useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);

  if (loading || !cardData?.data)
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );

  return (
    <Box
      ref={ref}
      sx={{
        backgroundImage: "url('/pictures/mock7.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className={`sm:p-10 pt-20`}
    >
      <Box className="flex sm:flex-row flex-col justify-evenly h-full sm:min-w-[900px] transition-all appear">
        <CardDescription
          title={cardData?.data?.attributes?.title}
          text1={
            cardData?.data?.attributes?.text1?.document?.children[0].children[0]
              .value
          }
          text2={cardData?.data?.attributes?.text2}
        />
        {!isMobileDevice && (
          <CardImage data={cardData?.data?.attributes?.images} />
        )}
      </Box>
      <CardImages
        isMobileDevice={isMobileDevice}
        data={cardData?.data?.attributes?.images}
        id={String(Math.random() * 1000)}
      />
    </Box>
  );
};
export default PortfolioCard;
