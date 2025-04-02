import { Box, Card, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { ENUMS_CATEGORY } from "../../../const/enums";

export const InfoSection = () => {
  const imgArray = [
    { src: "/pictures/categories/cat0.jpg", alt: "plytki", category: 1 },
    { src: "/pictures/categories/cat1.png", alt: "elewacja", category: 2 },
    { src: "/pictures/categories/cat2.jpg", alt: "szpachlowanie", category: 3 },
    { src: "/pictures/categories/cat3.jpg", alt: "gruntowanie", category: 4 },
    { src: "/pictures/categories/cat4.jpg", alt: "panele", category: 5 },
  ];

  return (
    <Box className="grid px-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center w-full">
      {imgArray.map((details) => (
        <CategoryCard
          key={details.alt}
          src={details.src}
          alt={details.alt}
          category={details.category}
        />
      ))}
    </Box>
  );
};

const CategoryCard = ({
  src,
  alt,
  category,
}: {
  src: string;
  alt: string;
  category: number;
}) => {
  return (
    <Box
      className="hover:opacity-60 duration-200 bg-black z-30"
      sx={{ maxWidth: 670, position: "relative" }}
    >
      <Link href={`/portfolio/${category}`}>
        <Card
          sx={{
            height: 600,
            backgroundColor: "black",
            position: "relative",
          }}
        >
          <Typography
            gutterBottom
            sx={{
              position: "absolute",
              width: "100%",
              color: "white",
              fontSize: 26,
              padding: 1,
              textAlign: "center",
              zIndex: 20,
            }}
          >
            {ENUMS_CATEGORY[Number(category)]}
          </Typography>

          <CardMedia
            component="img"
            image={src}
            alt={alt}
            sx={{
              objectFit: "cover", // Zapewnia, że obrazek rozciągnie się na całą przestrzeń
              height: "100%", // Pełna wysokość karty
              width: "100%", // Pełna szerokość karty
            }}
          />
        </Card>
        <Box
          className="h-full"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: 10,
          }}
        >
          <Box className={"hover:h-full hidden"}>
            test
          </Box>
          </Box>
      </Link>
    </Box>
  );
};
