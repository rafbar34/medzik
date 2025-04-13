"use client";
import React, { useRef } from "react";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import { TextIcon } from "@/components/common/text/text-with-icon";
import { Box } from "@mui/material";
import { Header } from "@/components/common/text/header";
import { useDetectCurrentComponent } from "@/hooks/useDetectCurrentComponent";

export const IconsSection = () => {
  const ref = useRef(null);
  const isVisible = useDetectCurrentComponent(ref, false);

  const ICONS_ARRAY = [
    {
      text: "Profesjonalizm",
      Component: (
        <WorkspacePremiumOutlinedIcon
          sx={{ fontSize: 54, color: "white", opacity: 1 }}
        />
      ),
    },
    {
      text: "Terminowość",
      Component: (
        <CalendarMonthOutlinedIcon
          sx={{ fontSize: 54, color: "white", opacity: 1 }}
        />
      ),
    },
    {
      text: "Kompleksowa obsługa",
      Component: (
        <HandymanOutlinedIcon
          sx={{ fontSize: 54, color: "white", opacity: 1 }}
        />
      ),
    },
    {
      text: "Konkurencyjne ceny",
      Component: (
        <MonetizationOnOutlinedIcon
          sx={{ fontSize: 54, color: "white", opacity: 1 }}
        />
      ),
    },
    {
      text: "Satysfakcje",
      Component: (
        <TagFacesOutlinedIcon
          sx={{ fontSize: 54, color: "white", opacity: 1 }}
        />
      ),
    },
  ];

  return (
    <Box
      ref={ref}
      sx={{ backgroundImage: "url('/pictures/background.png')" }}
      className="flex relative overflow-hidden group justify-between flex-col sm:pb-5 pt-2 opacity-80"
    >
      <Header
        title="Gwarantujemy"
        color={"white"}
      />
      <>
        <Box className="flex sm:flex-row flex-col bg-transparent justify-evenly gap-12 sm:gap-20 flex-wrap">
          {ICONS_ARRAY.map(({ text, Component }) => (
            <Box
              key={text}
              className={`transition-all ${isVisible ? "appear" : "opacity-0"}`}
            >
              <TextIcon text={text}>{Component}</TextIcon>
            </Box>
          ))}
        </Box>
      </>
    </Box>
  );
};
