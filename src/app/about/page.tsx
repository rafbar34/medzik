import { IconsSection } from "@/components/about/icons-section";
import { Header } from "@/components/common/text/header";
import {
  Box,
  Button,
  Card,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

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
    alt: "house6",
  },
];

const About = () => {
  return (
    <div>
      <HeroVideo />
    </div>
  );
};
export default About;

const HeroVideo = () => {
  return (
    <div className=" w-full overflow-hidden">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
  <source src="/videos/mock2.mp4" type="video/mp4" />
        Twoja przeglądarka nie obsługuje wideo.
      </video> */}
      <Paper
        elevation={0}
        className="relative h-[100vh] bg-[url(/pictures/mock4.png)] bg-cover  w-full mb-16"
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 text-white">
          <h1 className="text-md md:text-4xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam
          </h1>
        </div>
      </Paper>
      <Box className="flex justify-evenly  mb-16">
        <Card
          variant="outlined"
          className=" w-1/3 p-5 rounded-md border-2"
          elevation={0}
        >
          <Header title=" Dlaczego my ?" />

          <Typography
            className="text-justify"
            sx={{ fontSize: 18 }}
            variant="body1"
          >
            Jesteśmy firmą specjalizującą się w kompleksowych wykończeniach
            wnętrz, remontach oraz adaptacjach mieszkań, domów i lokali
            użytkowych. Dzięki wieloletniemu doświadczeniu oraz dbałości o każdy
            detal, realizujemy nawet najbardziej wymagające projekty. Nasza
            misja to dostarczenie usług najwyższej jakości, które spełnią
            oczekiwania nawet najbardziej wymagających klientów.
          </Typography>
        </Card>
        <Card
          variant="outlined"
          className=" w-1/3 p-5 rounded-md border-2"
          elevation={0}
        >
          <Header title="Nasza oferta obejmuje:" />
          <Typography
            sx={{ fontSize: 18 }}
            variant="body1"
          >
            •Malowanie, szpachlowanie, tapetowanie
            <br />
            •Układanie płytek, paneli, parkietów
            <br />
            •Montaż sufitów podwieszanych i ścianek działowych
            <br />
            •Instalacje elektryczne i hydrauliczne
            <br />
            •Kompleksowe remonty łazienek i kuchni
            <br />
            •Kompleksowe remonty łazienek i kuchni2
            <br />
          </Typography>
        </Card>
      </Box>
      <IconsSection />
      <Box>
        <Header title="Portfolio" />

        <ImageList
          sx={{ width: "100%", height: '100%'}}
          cols={3}

        >
          {data.map((item) => (
            <ImageListItem key={item.alt}>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Box className="w-full flex justify-center mt-10">

        <Button  className="w-36 h-16 bg-amber-500 text-white rounded-md" >Zobacz więcej</Button>
        </Box>
      </Box>
    </div>
  );
};
