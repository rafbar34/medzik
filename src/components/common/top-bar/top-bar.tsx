"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const pages = [
  { url: "/about", title: "O nas" },
  { url: "/portfolio", title: "Projekty" },
  { url: "/pricing", title: "Wycena" },
  { url: "/contact", title: "Kontakt" },
];

export const TopBar = () => {
  const router = useRouter();
  const handleNavigate = (url: string) => {
    router.push(url);
  };
  return (
    <AppBar
      className="bg-black/40"
      position="fixed"
    >
      <Container
        className="content-center"
        maxWidth="xl"
        sx={{ height: 80 }}
      >
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGOe
          </Typography>

          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.url}
                sx={{ my: 2, color: "white", display: "block", mx: 2 }}
                size="large"
                onClick={() => handleNavigate(page.url)}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
