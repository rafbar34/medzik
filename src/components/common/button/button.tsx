import { Box, Button } from "@mui/material";
import React from "react";

export const CustomButton = ({
  width,
  title,
  className,
  fontWeight = "font-semibold",
  type='button',
}: {
  title: string;
  width: number | string;
  className?: string;
  fontWeight?: string;
  type?:'button'| "submit"
}) => {
  return (
    <Box className="w-full flex justify-center  relative z-10 mt-5">
      <Button
        type={type}
        className={` w-full sm:w-${width} h-full sm:rounded-xl ${fontWeight} ${className}`}
        sx={{ bgcolor: "#f59e0b", color: "white" }}
      >
        {title}
      </Button>
    </Box>
  );
};
