import { Box, Typography } from "@mui/material";
import React from "react";

export const TextIcon = ({
  text,
  children,
}: {
  text: string;
  children: any;
}) => {
  return (
    <Box className="flex flex-col justify-center items-center">
      {children}
      <Typography
        sx={{ fontSize: 21 }}
        variant="body1"
        color={"white"}
      >
        {text}
      </Typography>
    </Box>
  );
};
