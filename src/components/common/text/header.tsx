import { Typography } from "@mui/material";
import React from "react";

export const Header = ({
  title,
  color = "black",
  className,
  textAlign = "center",
}: {
  title: string;
  color?: string;
  className?: string;
  textAlign?: string;
}) => {
  return (
    <Typography
      sx={{ textAlign: textAlign, marginBottom: 2, marginTop: 2, color: color }}
      variant="h4"
      className={className}
    >
      {title}
    </Typography>
  );
};
