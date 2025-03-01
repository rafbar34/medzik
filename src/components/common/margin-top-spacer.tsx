import { Box } from "@mui/material";
import React, { ReactNode } from "react";

export const MarginSpacer = ({ children }: { children: ReactNode }) => {
  return <Box className="mb-16 mt-20 ">{children}</Box>;
};
