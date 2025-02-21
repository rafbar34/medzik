import React from "react";
import { IconsSection } from "@/components/about/sections/icons-section";
import { InfoSection } from "@/components/about/sections/info-section";
import { WallPaperSection } from "@/components/about/sections/wall-paper-section";
import { PortfolioDemoSection } from "@/components/about/sections/portfolio-section";
import { PricingSection } from "@/components/about/sections/pricing-section";

const About = () => {
  return (
    <div>
      <HeroVideo />
    </div>
  );
};
export default About;

const HeroVideo = () => {
  return (
    <div className=" w-full overflow-hidden">
      <WallPaperSection />
      <InfoSection />
      <PortfolioDemoSection />
      <IconsSection />
      <PricingSection />
    </div>
  );
};
