import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";

export const CustomButton = ({
  width,
  title,
  className,
  fontWeight = "font-semibold",
  type = "button",
  bgColor = "rgb(97, 97, 97)",
  loading = false,
  //#f59e0b
}: {
  title: string;
  width: number | string;
  className?: string;
  fontWeight?: string;
  type?: "button" | "submit";
  bgColor?: string;
  loading?: boolean;
}) => {
  return (
    <Box className="w-full flex justify-center  relative z-10 mt-5">
      <Button
        type={type}
        className={` w-full sm:w-${width} h-full sm:rounded-xl ${fontWeight} ${className} hover:bg-[#f59e0b]`}
        sx={{ bgcolor: bgColor, color: "white" }}
      >
        {loading ? <CircularProgress /> : title}
      </Button>
    </Box>
  );
};
