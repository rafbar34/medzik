import React from "react";
import { IconsSection } from "@/components/about/sections/icons-section";
import { InfoSection } from "@/components/about/sections/info-section";
import { WallPaperSection } from "@/components/about/sections/wall-paper-section";
import { PricingSection } from "@/components/about/sections/pricing-section";
import { Box } from "@mui/material";
import PortfolioDemoSection from "@/components/about/sections/portfolio-section";

const About = () => {
  return (
 
      <Box className={"bg-white/30 pb-20 gap-20 flex flex-col"}>
        <WallPaperSection />
        <InfoSection />
        <PortfolioDemoSection />
        <PricingSection />
        <IconsSection />
      </Box>
  );
};
export default About;
