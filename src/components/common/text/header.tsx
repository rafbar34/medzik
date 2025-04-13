import { Typography } from "@mui/material";
import React from "react";

export const Header = ({
  title,
  color = "black",
  className,
  textAlign = "center",
  variant = "h4",
}: {
  title: string;
  color?: string;
  className?: string;
  textAlign?: string;
  variant?: "h4" | "h1";
}) => {
  return (
    <Typography
      sx={{
        textAlign: textAlign,
        marginBottom: 2,
        marginTop: 2,
        color: color,
        fontSize: "2.5rem",
      }}
      variant={variant}
      className={className}
    >
      <strong>{title}</strong>
    </Typography>
  );
};
