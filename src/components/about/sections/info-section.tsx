"use client";

import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import React, { useRef } from "react";
import { ENUMS_CATEGORY } from "../../../const/enums";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDetectCurrentComponent } from "@/hooks/useDetectCurrentComponent";

export const InfoSection = () => {
  const imgArray = [
    {
      src: "/pictures/categories/cat0.jpg",
      alt: "plytki",
      category: 1,
      desc: "Specjalizujemy się w precyzyjnym układaniu płytek zarówno na ścianach, jak i podłogach. Gwarantujemy estetyczne wykończenie i trwałość na lata — idealne do łazienek, kuchni i tarasów.",
    },
    {
      src: "/pictures/categories/cat1.png",
      alt: "elewacja",
      category: 2,
      desc: "Oferujemy kompleksowe prace elewacyjne, które nie tylko poprawiają wygląd budynku, ale też zwiększają jego izolację termiczną. Stawiamy na trwałe materiały i dokładność wykonania.",
    },
    {
      src: "/pictures/categories/cat2.jpg",
      alt: "szpachlowanie",
      category: 3,
      desc: "Wyrównujemy ściany i sufity z najwyższą starannością. Dzięki szpachlowaniu uzyskujemy idealnie gładkie powierzchnie gotowe pod malowanie lub tapetowanie.",
    },
    {
      src: "/pictures/categories/cat3.jpg",
      alt: "gruntowanie",
      category: 4,
      desc: "Profesjonalne gruntowanie to podstawa trwałych i estetycznych wykończeń. Stosujemy wysokiej jakości środki gruntujące, które zapewniają lepszą przyczepność i zabezpieczają podłoże.",
    },
    {
      src: "/pictures/categories/cat4.jpg",
      alt: "podłoga",
      category: 5,
      desc: "Zajmujemy się fachowym montażem paneli podłogowych i ściennych, a także demontażem starych nawierzchni. Dbamy o każdy detal, oferując szybki montaż i elegancki efekt końcowy, idealnie dopasowany do charakteru wnętrza.",
    },
  ];
  const ref = useRef(null);
  const isVisible = useDetectCurrentComponent(ref, false);

  return (
    <Box
      className={`transition-all ${isVisible ? "fadeDown appear" : "opacity-0"} grid px-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center w-full`}
      ref={ref}
    >
      {imgArray.map((details) => (
        <CategoryCard
          {...details}
          key={details.alt}
        />
      ))}
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
        maxWidth: 650,
      }}
    >
      <Link href={`/portfolio/${category}`}>
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

        {/* Overlay */}
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
          <Box className=" min-h-[180px] flex flex-col justify-between">
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.774)",
                fontSize: 19,
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
        </Box>
      </Link>
    </Card>
  );
};
