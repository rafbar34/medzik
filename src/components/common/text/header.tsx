import { Typography } from "@mui/material";
import React from "react";

export const Header = ({
  title,
  color = "black",
  className,
}: {
  title: string;
  color?: string;
  className?: string;
}) => {
  return (
    <Typography
      sx={{ textAlign: "center", marginBottom: 2, color: color }}
      variant="h4"
      className={className}
    >
      {title}
    </Typography>
  );
};
