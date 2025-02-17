import React from "react";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import { TextIcon } from "@/components/common/text/text-with-icon";
import { Box } from "@mui/material";
import { Header } from "../common/text/header";

export const IconsSection = () => {
  return (
    <Box className="flex  mb-16 bg-amber-500   justify-center flex-col">
      <Box className="w-full">
        <Header
          title="Gwarantujemy"
          color={"white"}
        />
      </Box>
      <Box className="flex  mb-16 bg-amber-500  justify-evenly gap-20 flex-wrap">
        <TextIcon text="Profesjonalizm">
          <WorkspacePremiumOutlinedIcon
            sx={{ fontSize: 54, color: "white", opacity: 0.8 }}
          />
        </TextIcon>

        <TextIcon text="Terminowość">
          <CalendarMonthOutlinedIcon
            sx={{ fontSize: 54, color: "white", opacity: 0.8 }}
          />
        </TextIcon>

        <TextIcon text="Kompleksowa obsługa">
          <HandymanOutlinedIcon
            sx={{ fontSize: 54, color: "white", opacity: 0.8 }}
          />
        </TextIcon>

        <TextIcon text=" Konkurencyjne ceny">
          <MonetizationOnOutlinedIcon
            sx={{ fontSize: 54, color: "white", opacity: 0.8 }}
          />
        </TextIcon>
        <TextIcon text="Gwarancja satysfakcji">
          <TagFacesOutlinedIcon
            sx={{ fontSize: 54, color: "white", opacity: 0.8 }}
          />
        </TextIcon>
      </Box>
    </Box>
  );
};
