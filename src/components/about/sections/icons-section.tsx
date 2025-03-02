'use client'
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

export const IconsSection = () => {
  return (
    <Box className="flex  bg-[rgba(245,158,11,0.9)]  relative overflow-hidden group justify-between flex-col pb-5 pt-5">
     
        <Header
          title="Gwarantujemy"
          color={"white"}
        />
 
      <Box className="flex bg-transparent justify-evenly gap-20 flex-wrap">
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
        <TextIcon text="Gwarancja satysfakcji">
          <TagFacesOutlinedIcon
            sx={{ fontSize: 54, color: "white", opacity: 1 }}
          />
        </TextIcon>
      </Box>
      <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
 <Link href={'/contact'} >
      <CustomButton title="Skontaktuj się z nami" width={'1/4'} />
 </Link>
        </motion.div>
    </Box>
  );
};
