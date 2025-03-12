"use client";
import React from "react";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import { TextIcon } from "@/components/common/text/text-with-icon";
import { Box } from "@mui/material";
import { Header } from "@/components/common/text/header";
import { CustomButton } from "@/components/common/button/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { isMobile } from "react-device-detect";

export const IconsSection = () => {
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);

  React.useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);
  return (
    <Box
      sx={{ backgroundImage: "url('/pictures/background.png')" }}
      className="flex   relative overflow-hidden group justify-between flex-col sm:pb-5 pt-5 opacity-80"
    >
      <Header
        title="Gwarantujemy"
        color={"white"}
      />

      <>
        <Box className="flex sm:flex-row flex-col bg-transparent justify-evenly gap-12 sm:gap-20 flex-wrap">
          <TextIcon text="Profesjonalizm">
            <WorkspacePremiumOutlinedIcon
              sx={{ fontSize: 54, color: "white", opacity: 1 }}
            />
          </TextIcon>

          <TextIcon text="Terminowość">
            <CalendarMonthOutlinedIcon
              sx={{ fontSize: 54, color: "white", opacity: 1 }}
            />
          </TextIcon>

          <TextIcon text="Kompleksowa obsługa">
            <HandymanOutlinedIcon
              sx={{ fontSize: 54, color: "white", opacity: 1 }}
            />
          </TextIcon>

          <TextIcon text=" Konkurencyjne ceny">
            <MonetizationOnOutlinedIcon
              sx={{ fontSize: 54, color: "white", opacity: 1 }}
            />
          </TextIcon>
          <TextIcon text="Satysfakcje">
            <TagFacesOutlinedIcon
              sx={{ fontSize: 54, color: "white", opacity: 1 }}
            />
          </TextIcon>
        </Box>
        {!isMobileDevice && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            <Link href={"/contact"}>
              <CustomButton
                title="Skontaktuj się z nami"
                width={"1/4"}
                bgColor="#f59e0b"
              />
            </Link>
          </motion.div>
        )}
      </>
      {isMobileDevice && (
        <Link href={"/contact"}>
          <CustomButton
            title="Skontaktuj się z nami"
            width={"1/4"}
            bgColor="#f59e0b"
          />
        </Link>
      )}
    </Box>
  );
};
