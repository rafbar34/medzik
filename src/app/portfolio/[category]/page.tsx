"use client";
import { CustomButton } from "@/components/common/button/button";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

type CardDataType = {
  id: string;
  attributes: {
    text1: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      document: any;
    };
    text2: string;
    title: string;
    category: number;
    images: [
      {
        upload_id: string;
        alt: string;
        custom_data: {
          url: string | undefined;
        };
      },
    ];
  };
};

const Portfolio = () => {
  const { category } = useParams();
  const [cardData, setCardData] = useState<Array<CardDataType> | null>(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Api-Version": "3",
        },
      });
      const { data } = await res.json();
      console.log(category);
      const filterByCategory = data?.filter(
        (item: CardDataType) => item?.attributes.category === Number(category)
      );
      setCardData(filterByCategory ?? []);
    };
    getData();
  }, [category]);

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
        {!!cardData &&
          cardData.map((item: CardDataType) => {
            return (
              <InfoCard
                key={item?.id}
                id={item?.id}
                item={item?.attributes}
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
  id,
}: {
  id: string;
  item: {
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    text1: any;
    text2: string;
    images: [
      {
        upload_id: string;
        alt: string;
        custom_data: {
          url: string | undefined;
        };
      },
    ];
  };
}) => {
  return (
    <Card
      elevation={4}
      className="shadow-md border-[1.5px] border-[light_color]"
      sx={{ maxWidth: "100%", backgroundColor: "rgba(255, 255, 255, 0.062)" }}
    >
      <CardMedia
        sx={{ height: 250 }}
        image={item?.images[0]?.custom_data?.url}
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
          <Typography variant="body2">
            {item?.text1?.document?.children[0].children[0].value}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Link
          style={{ width: "100%" }}
          href={`/portfolio/category/${id}`}
        >
          <CustomButton
            width={"1/2"}
            title="Szczegóły"
            fontWeight="font-semibold"
            className="text-sm"
          />
        </Link>
      </CardActions>
    </Card>
  );
};
