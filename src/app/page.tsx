import React from "react";
import { IconsSection } from "@/components/about/sections/icons-section";
import { InfoSection } from "@/components/about/sections/info-section";
import { WallPaperSection } from "@/components/about/sections/wall-paper-section";
import { PricingSection } from "@/components/about/sections/pricing-section";
import { Box } from "@mui/material";

const About = () => {
  return (
 
      <Box className={"bg-white/30 pb-20 gap-20 flex flex-col"}>
        <WallPaperSection />
        <InfoSection />
        <IconsSection />
        <PricingSection />
      </Box>
  );
};
export default About;
