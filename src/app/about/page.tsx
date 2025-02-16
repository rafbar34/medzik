import { Box, Card, Paper, Typography } from "@mui/material";
import React from "react";
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
      <Box className="flex justify-evenly  mb-16" >
        <Card
           variant="outlined"
          className=" w-1/3 p-5 rounded-md border-2"
          elevation={0}
        >
          <Typography
            sx={{ textAlign: "center", marginBottom: 2 }}
            variant="h4"
          >
            Kim jesteśmy
          </Typography>
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
          <Typography
            sx={{ marginBottom: 2 }}
            variant="h4"
          >
            Nasza oferta obejmuje:
          </Typography>
            <Typography
              sx={{ fontSize: 18 }}
              variant="body1"
            >
              <p>•Malowanie, szpachlowanie, tapetowanie</p>
              <p>•Układanie płytek, paneli, parkietów</p>
              <p>•Montaż sufitów podwieszanych i ścianek działowych</p>
              <p>•Instalacje elektryczne i hydrauliczne</p>
              <p>•Kompleksowe remonty łazienek i kuchni</p>
              <p>•Kompleksowe remonty łazienek i kuchni2</p>
            </Typography>
     
        </Card>
      </Box>
    </div>
  );
};
