"use client";
import { MarginTopSpacer } from "@/components/common/margin-top-spacer";
import { Header } from "@/components/common/text/header";
import {
  Box,
  Card,
  ImageList,
  ImageListItem,
  Modal,
  Typography,
} from "@mui/material";

import React, { ReactNode } from "react";

const data = [
  {
    src: "/pictures/mock3.jpg",
    alt: "house1",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house2",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house3",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house4",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house5",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house64",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house63",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house62",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house61",
  },
];

const PortfolioCard = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MarginTopSpacer>
      <Box className="p-10">
        <Box className="flex justify-evenly h-full">
          <Card
            className=" w-1/2 p-5  bg-white/40  rounded-lg"
            elevation={2}
          >
            <Header
              title={"Mieszkanie 55 m2"}
              textAlign="left"
            />
            <PortfolioCard.Description>
              Kompleksowy remont mieszkania o powierzchni 55 m², wykonany przez
              [Nazwa Twojej Firmy]. Projekt obejmował pełne odświeżenie wnętrza,
              modernizację instalacji oraz wysokiej jakości wykończenie,
              zapewniające funkcjonalność i estetykę.
              <br />
              <br />
              Zakres prac:
              <br />
              &bull; Prace budowlane i wykończeniowe, w tym wyrównanie ścian,
              nowe tynki, gładzie i malowanie.
              <br />
              &bull;Montaż podłóg, w tym paneli, gresu lub winylu, wraz z
              wyrównaniem i izolacją podłoża.
              <br />
              &bull;Modernizacja kuchni, obejmująca nową zabudowę, montaż
              sprzętu AGD i dopracowanie detali.
              <br />
              &bull;Kompleksowy remont łazienki, w tym układanie płytek, montaż
              nowoczesnej armatury oraz zabudowy podtynkowej.
              <br />
              &bull;Wymiana instalacji elektrycznej, montaż punktowego
              oświetlenia LED, nowych kontaktów i włączników.
              <br />
              &bull;Montaż drzwi, listew przypodłogowych i elementów
              dekoracyjnych.
              <br />
              <br />
              Efekt końcowy to eleganckie, nowoczesne wnętrze, dopasowane do
              potrzeb mieszkańców. Przykład tej realizacji pokazuje dbałość o
              detale, wysoką jakość wykonania oraz terminowość prac.
            </PortfolioCard.Description>
          </Card>
          <Card
            elevation={2}
            className=" relative  w-1/2"
          >
            <Box className="absolute inset-0 bg-white opacity-40">
              <img
                src={data[0].src}
                alt={data[0].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </Box>{" "}
          </Card>
        </Box>
        <ImageList
          sx={{ width: "100%" }}
          cols={3}
          className="mt-20"
        >
          {data.map((item) => (
            <ImageListItem
              onClick={handleClick}
              key={item.alt}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
              <Modal
                open={isOpen}
                onClose={handleClick}
                className="flex justify-center items-center"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={"80%"}
                  height={"80%"}
                />
              </Modal>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </MarginTopSpacer>
  );
};

// eslint-disable-next-line react/display-name
PortfolioCard.Description = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      className="text-justify"
      sx={{ fontSize: 18 }}
      variant="body1"
    >
      {children}
    </Typography>
  );
};

export default PortfolioCard;
