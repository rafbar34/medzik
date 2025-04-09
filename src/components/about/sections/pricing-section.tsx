"use client";

import React, { useRef } from "react";
import { CustomButton } from "@/components/common/button/button";
import { Header } from "@/components/common/text/header";
import { useDetectCurrentComponent } from "@/hooks/useDetectCurrentComponent";
import { Box, Card, Typography } from "@mui/material";
import Link from "next/link";

export const PricingSection = () => {
  const ref = useRef(null);
  const isVisible = useDetectCurrentComponent(ref, false);
  return (
    <Box
      ref={ref}
      className={` transition-all ${isVisible ? "fadeDown" : "opacity-0"} flex justify-center h-[900px] sm:h-[450px] `}
    >
      <Card
        elevation={2}
        className="sm:w-full sm:px-5 flex sm:flex-row flex-col  border-[1.5px] border-[rgb(97, 97, 97)] rounded-lg h-[770px] sm:h-[450px]"
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.747)" }}
      >
        <Card
          className=" relative  sm:w-1/2 h-1/2 sm:h-auto"
          sx={{
            backgroundImage: "url('/pictures/mock6.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box className="absolute inset-0 bg-white opacity-60"></Box>{" "}
        </Card>
        <Card
          sx={{
            padding: "1.25rem",
            backgroundColor: " rgb(255, 255, 255 ,0.4)",
          }}
          className="  sm:w-1/2  flex flex-col justify-between "
        >
          <Header
            title="Wyceń swój projekt"
            className="relative z-10"
          />
          <Typography
            className="text-justify relative z-10"
            sx={{ fontSize: 18 }}
            variant="body1"
          >
            Oferujemy kompleksowe usługi budowlane od fundamentów po wykończenie
            wnętrz. Dzięki wykwalifikowanemu zespołowi gwarantujemy najwyższą
            jakość wykonania. Skorzystaj z naszej darmowej wyceny i dowiedz się
            więcej, klikając w przycisk poniżej!
          </Typography>
          <Box className="w-full flex justify-center  relative z-10">
            <Link
              href={`/pricing`}
              className="w-full"
            >
              <CustomButton
                width={"1/2"}
                className="font-semibold"
                title="Wycena"
                bgColor="rgb(97, 97, 97)"
              />
            </Link>
          </Box>
        </Card>
        <Card />
      </Card>
    </Box>
  );
};
