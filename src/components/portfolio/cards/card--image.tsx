/* eslint-disable @next/next/no-img-element */
import { Box, Card } from "@mui/material";
import React from "react";

export const CardImage = ({
  data,
}: {
  data: Array<{
    upload_id: string;
    alt: string;
    custom_data: {
      url: string | undefined;
    };
  }>;
}) => {
  if (!data?.[0]) return <div></div>;
  return (
    <Card
      elevation={2}
      className=" relative sm:w-1/3 w-0 sm:mt-20"
    >
      <Box className="absolute inset-0 bg-white opacity-40">
        <img
          src={data[0]?.custom_data?.url}
          alt={"bg photo"}
          className="w-full min-h-[350px] h-full object-fill"
          loading="lazy"
        />
      </Box>
    </Card>
  );
};
