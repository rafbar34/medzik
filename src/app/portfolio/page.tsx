import { CustomButton } from "@/components/common/button/button";
import { MarginTopSpacer } from "@/components/common/margin-top-spacer";
import { Header } from "@/components/common/text/header";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Portfolio = () => {
  return (
    <MarginTopSpacer>
      <Header title="Portfolio" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </MarginTopSpacer>
  );
};

export default Portfolio;

const InfoCard = () => (
  <Card
    elevation={4}
    sx={{ maxWidth: "100%" }}
  >
    <CardMedia
      sx={{ height: 250 }}
      image="/pictures/mock3.jpg"
      title="green iguana"
    />
    <CardContent>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        className="text-[#f5740b]"
      >
        Mieszkanie 55m2
      </Typography>
      <Box
        sx={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
          overflow: "hidden",
        }}
      >
        <Typography variant="body2">
          wyremontowanie mieszkania 55m2 Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur voluptatibus officiis eligendi impedit
          enim, sint, id laborum atque laudantium veniam similique veritatis.
          Voluptatibus recusandae facere nisi eligendi illo enim architecto!
        </Typography>
      </Box>
    </CardContent>
    <CardActions>
      <CustomButton
        width={"full"}
        title="Szczegóły"
        fontWeight="font-sm"
        className="text-sm"
      />
    </CardActions>
  </Card>
);
