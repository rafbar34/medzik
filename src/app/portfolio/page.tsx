import { CustomButton } from "@/components/common/button/button";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Link from "next/link";

const items = [
  {
    id: "project-1",
    title: "Mieszkanie 55m2",
    desc: "wyremontowanie mieszkania 55m2 Lorem ipsum dolor sit ametconsectetur adipisicing elit. Pariatur voluptatibus officiiseligendi impedit enim, sint, id laborum atque laudantium veniamsimilique veritatis. Voluptatibus recusandae facere nisi eligendiillo enim architecto!",
  },
  {
    id: "project-2",
    title: "Mieszkanie 55m2",
    desc: "wyremontowanie mieszkania 55m2 Lorem ipsum dolor sit ametconsectetur adipisicing elit. Pariatur voluptatibus officiiseligendi impedit enim, sint, id laborum atque laudantium veniamsimilique veritatis. Voluptatibus recusandae facere nisi eligendiillo enim architecto!",
  },
];

const Portfolio = () => {
  return (
    <Box
      className={" pb-20 gap-20 flex flex-col h-full min-h-screen pt-20"}
      sx={{
        backgroundImage: "url('/pictures/mock7.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10">
        {items.map((item: { id: string; title: string; desc: string }) => {
          return (
            <InfoCard
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
    </Box>
  );
};

export default Portfolio;

const InfoCard = ({
  item,
}: {
  item: { id: string; title: string; desc: string };
}) => {
  return (
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
          {item?.title}
        </Typography>
        <Box
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
          }}
        >
          <Typography variant="body2">{item?.desc}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Link
          style={{ width: "100%" }}
          href={`/portfolio/${item.id}`}
        >
          <CustomButton
            width={"full"}
            title="Szczegóły"
            fontWeight="font-semibold"
            className="text-sm"
          />
        </Link>
      </CardActions>
    </Card>
  );
};
