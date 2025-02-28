"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";

const pages = [
  { url: "/", title: "Strona główna" },
  { url: "/portfolio", title: "Projekty" },
  { url: "/pricing", title: "Wycena" },
  { url: "/contact", title: "Kontakt" },
];

export const TopBar = () => {

  return (
    <AppBar
      sx={{ bgcolor: "rgba(0, 0, 0, 0.4)" }}
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
              <Link
                key={page.url}
                href={`${page.url}`}
              >
                <Button
                  sx={{ my: 2, color: "white", display: "block", mx: 2 }}
                  size="large"
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
