"use client";

import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import React, { useRef } from "react";
import { ENUMS_CATEGORY } from "../../../const/enums";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDetectCurrentComponent } from "@/hooks/useDetectCurrentComponent";
import { CATEGORY_ARRAY } from "../../../const/category";
import { Header } from "@/components/common/text/header";

export const InfoSection = () => {
  const ref = useRef(null);
  const isVisible = useDetectCurrentComponent(ref, false);
  return (
    <Box>
      <Header
        className="mb-16 text-[3rem] mt-[-10px]"
        title="Nasza oferta"
        variant="h1"
      />
      <Box
        className={`transition-all ${isVisible ? "fadeDown" : "opacity-0"} grid px-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center w-full`}
        ref={ref}
      >
        {CATEGORY_ARRAY.map((details) => (
          <CategoryCard
            {...details}
            key={details.alt}
          />
        ))}
      </Box>
    </Box>
  );
};

const CategoryCard = ({
  src,
  alt,
  category,
  desc,
}: {
  src: string;
  alt: string;
  category: number;
  desc: string;
}) => {
  return (
    <Card
      elevation={2}
      className="group bg-black z-30 shadow-lg"
      sx={{
        height: 580,
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden",
        maxWidth: 750,
      }}
    >
      <Typography
        gutterBottom
        sx={{
          position: "absolute",
          width: "100%",
          color: "white",
          fontSize: 30,
          padding: 1,
          textAlign: "center",
          zIndex: 20,
        }}
      >
        {ENUMS_CATEGORY[category as keyof typeof ENUMS_CATEGORY]}
      </Typography>

      <CardMedia
        component="img"
        image={src}
        alt={alt}
        sx={{
          objectFit: "cover",
          height: "100%",
          width: "100%",
        }}
      />

      <Box
        className="h-full bg-[rgba(0,0,0,0.4)] group-hover:bg-[rgba(0,0,0,0.1)] duration-200"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
        }}
      />
      <Box
        className="transition-transform duration-300 translate-y-full group-hover:translate-y-0"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: 2,
          zIndex: 30,
        }}
      >
        <Link href={`/portfolio/${category}`}>
          <Box className=" min-h-[180px] flex flex-col justify-between">
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.878)",
                fontSize: 18,
                textAlign: "justify",
              }}
            >
              {desc}
            </Typography>
            <Box className="flex justify-end">
              <IconButton sx={{ color: "white" }}>
                <ArrowForwardIcon sx={{ fontSize: 36 }} />
              </IconButton>
            </Box>
          </Box>
        </Link>
      </Box>
    </Card>
  );
};
