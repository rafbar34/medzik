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
      className="content-center px-10 flex"
      sx={{ height: 80, width: "100%" }}
    >
      <Toolbar disableGutters>
        <Link className="mt-5" href={"/"}>
          <Image
            height={30}
            width={140}
            src="/pictures/logo5.png"
            alt="logo"
          />
        </Link>
        <Box sx={{ flexGrow: 2, display: "flex" }}>
          {pages.map((page) => (
            <Box
              key={page.url}
              className="hover:bg-[rgba(0,0,0,0.4)]"
            >
              <Link href={`${page.url}`}>
                <Button
                  sx={{ my: 2, color: "white", display: "block", mx: 2, fontSize:16}}
                  size="large"
                >
                  {page.title}
                </Button>
              </Link>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
};
