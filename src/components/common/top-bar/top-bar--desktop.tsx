import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";

export const TopBarDesktop = ({
  pages,
}: {
  pages: Array<{ url: string; title: string }>;
}) => {
  return (
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
  );
};
