import { Box, Button } from "@mui/material";
import React from "react";

export const CustomButton = ({
  width,
  title,
  className,
  fontWeight,
}: {
  title: string;
  width: number | string;
  className?: string;
  fontWeight?: string;
}) => {
  return (
    <Box className="w-full flex justify-center  relative z-10 mt-5">
      <Button
        className={`w-${width} h-full bg-amber-500 text-white rounded-md ${fontWeight} ${className}`}
      >
        {title}
      </Button>
    </Box>
  );
};
