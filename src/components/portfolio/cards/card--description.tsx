import { Header } from "@/components/common/text/header";
import { Box, Card, Typography } from "@mui/material";
import React, { ReactNode } from "react";

export const CardDescription = ({
  text1,
  text2,
  title,
}: {
  text1: string;
  text2: string;
  title: string;
}) => {
  return (
    <Card
      className=" w-full  xl:w-1/2 pt-3 bg-white/40  rounded-lg min-h-96 sm:mt-20"
      elevation={2}
    >
      <Box className="px-5">
        <Header
          title={title}
          textAlign="left"
          className="text-[#f5970b]"
        />
        <CardDescription.Description>{text1}</CardDescription.Description>
        <br />
      </Box>

      <Card
        elevation={2}
        className="shadow-lg p-5 border-t-[rgba(245,159,11,0.23)]  border-t-2 h-full"
      >
        <Typography
          variant="body1"
          component="div"
          sx={{ textWrap: "wrap" }}
          className="font-medium"
        >
          <div dangerouslySetInnerHTML={{ __html: text2 }} />
        </Typography>
      </Card>
    </Card>
  );
};
// eslint-disable-next-line react/display-name
CardDescription.Description = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      className="text-justify "
      sx={{ fontSize: 18 }}
      variant="body1"
    >
      {children}
    </Typography>
  );
};
