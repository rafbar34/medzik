'use client'
import * as React from "react";
import AppBar from "@mui/material/AppBar";

import { isMobile } from "react-device-detect";
import { TopBarMobile } from "./top-bar--mobile";
import { TopBarDesktop } from "./top-bar--desktop";
const pages = [
  { url: "/", title: "Strona główna" },
  { url: "/portfolio", title: "Projekty" },
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
      sx={{ bgcolor: "rgba(0, 0, 0, 0.4)" }}
      position="fixed"
    >
      {isMobileDevice ? <TopBarMobile  pages={pages} /> : <TopBarDesktop pages={pages} />}
    </AppBar>
  );
};
