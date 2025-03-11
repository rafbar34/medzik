import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";

export const TopBarDesktop = ({
  pages,
}: {
  pages: Array<{ url: string; title: string }>;
}) => {
  return (
    <Box
      className="content-center px-10"
      sx={{ height: 80, width:'100%' }}
    >
      <Toolbar disableGutters>
        <Image height={30} width={140} src="/pictures/logo-topbar.png" alt="logo"/>
        
        <Box sx={{ flexGrow: 2, display: "flex" }}>
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
    </Box>
  );
};
