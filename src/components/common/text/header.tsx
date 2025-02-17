import { Typography } from "@mui/material";
import React from "react";

export const Header = ({
  title,
  color = "black",
}: {
  title: string;
  color?: string;
}) => {
  return (
    <Typography
      sx={{ textAlign: "center", marginBottom: 2, color: color }}
      variant="h4"
    >
      {title}
    </Typography>
  );
};
