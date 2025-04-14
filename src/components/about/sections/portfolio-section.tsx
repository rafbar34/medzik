"use client";
import { CustomButton } from "@/components/common/button/button";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { isMobile } from "react-device-detect";

type CardDataType = {
  data: [
    {
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
    },
  ];
};
const PortfolioDemoSection = () => {
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);
  const [cardData, setCardData] = React.useState<CardDataType | null>(null);

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}?page[limit]=6`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Api-Version": "3",
          },
        }
      );
      setCardData((await res.json()) ?? []);
    };
    getData();
  }, []);
  React.useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);
  return (
    <Box className="w-full border-[1.5px] border-[light_color] rounded-lg relative overflow-hidden group bg-white/40">
      <ImageList
        sx={{ width: "100%", height: "100%" }}
        cols={3}
      >
        {cardData?.data.map((item, idx) => (
          <ImageListItem key={idx}>
            <img
              src={item.attributes?.images[0]?.custom_data?.url}
              alt={item.attributes?.images[0]?.alt}
              loading="lazy"
              width={340}
              height={340}
              style={{ backgroundSize: "cover", backgroundAttachment: "fixed" }}
            />
          </ImageListItem>
        ))}
        {!isMobileDevice && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            <Link href={"/portfolio"}>
              <CustomButton
                className="font-medium px-4 py-2 text-white"
                width={"full"}
                title="Zobacz więcej"
                bgColor="#f59e0b"
              />
            </Link>
          </motion.div>
        )}
      </ImageList>
      {isMobileDevice && (
        <Link href={"/portfolio"}>
          <CustomButton
            className="font-medium px-4 py-2 text-white"
            width={"full"}
            title="Zobacz więcej"
            bgColor="#f59e0b"
          />
        </Link>
      )}
    </Box>
  );
};

export default PortfolioDemoSection;
