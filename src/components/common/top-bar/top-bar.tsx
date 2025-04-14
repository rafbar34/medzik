'use client'
import * as React from "react";
import AppBar from "@mui/material/AppBar";

import { isMobile } from "react-device-detect";
import { TopBarMobile } from "./top-bar--mobile";
import { TopBarDesktop } from "./top-bar--desktop";
const pages = [
  { url: "/portfolio/0", title: "Projekty" },
  { url: "/pricing", title: "Wycena" },
  { url: "/contact", title: "Kontakt" },
];

export const TopBar = () => {
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);

  React.useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);
  return (
    <AppBar
      sx={{ backgroundImage: "url('/pictures/background.png')", opacity:0.75 }}
      position="fixed"
    >
      {isMobileDevice ? <TopBarMobile  pages={pages} /> : <TopBarDesktop pages={pages} />}
    </AppBar>
  );
};
