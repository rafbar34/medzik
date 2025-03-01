import React from "react";
import { IconsSection } from "@/components/about/sections/icons-section";
import { InfoSection } from "@/components/about/sections/info-section";
import { WallPaperSection } from "@/components/about/sections/wall-paper-section";
import { PricingSection } from "@/components/about/sections/pricing-section";
import { Box, Paper } from "@mui/material";
import PortfolioDemoSection from "@/components/about/sections/portfolio-section";

const About = () => {
  return (
    <Paper
      elevation={0}
      className="relative  w-full overflow-hidden"
      style={{
        backgroundImage: "url('/pictures/tool-4.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Box className={"bg-white/70 pb-20 gap-20 flex flex-col"}>
        <WallPaperSection />
        <InfoSection />
        <PortfolioDemoSection />
        <IconsSection />
        <PricingSection />
      </Box>
    </Paper>
  );
};
export default About;
