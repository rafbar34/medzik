"use client";
import React from "react";
import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export const TopBarMobile = ({
  pages,
}: {
  pages: Array<{ url: string; title: string }>;
}) => {
  const [isFullScreenMenu, setIsFullScreenMenu] = React.useState(false);

  const toggleFullScreenMenu = () => setIsFullScreenMenu(!isFullScreenMenu);
  return (
    <>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, zIndex: 70 }}
          onClick={toggleFullScreenMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
        >
          Logo
        </Typography>
      </Toolbar>
      {isFullScreenMenu && (
        <Box className="absolute h-screen bg-black/80 top-0 w-screen z-50">
          <Box className="flex justify-center items-center h-full w-full">
            <Box className="flex flex-col h-full gap-10 justify-center items-center">
              {pages.map((page) => (
                <Link
                  key={page.url}
                  href={`${page.url}`}
                >
                  <Button
                    sx={{ my: 2, color: "white", display: "block", mx: 2 }}
                    size="large"
                    className="text-3xl"
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
