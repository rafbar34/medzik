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
      sx={{
        position: 'relative',
        width: { xs: "50%", sm: '25%' },
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',
        marginTop: { sm: '5rem' }
      }}

    >
      <Box className="absolute inset-0 bg-white opacity-40">
        <img
          src={data[0]?.custom_data?.url}
          alt={"bg photo"}
          className="w-full min-h-[450px] h-full object-cover"
          loading="lazy"
        />
      </Box>
    </Card>
  );
};
