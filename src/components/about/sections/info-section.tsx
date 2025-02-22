import { Header } from "@/components/common/text/header";
import { Box, Card, Typography } from "@mui/material";
import React, { ReactNode } from "react";

export const InfoSection = () => {
  return (
    <Box className="flex justify-evenly  mb-16">
      <InfoSection.Card title="Dlaczego my ?">
        Jesteśmy firmą specjalizującą się w kompleksowych wykończeniach wnętrz,
        remontach oraz adaptacjach mieszkań, domów i lokali użytkowych. Dzięki
        wieloletniemu doświadczeniu oraz dbałości o każdy detal, realizujemy
        nawet najbardziej wymagające projekty. Nasza misja to dostarczenie usług
        najwyższej jakości, które spełnią oczekiwania nawet najbardziej
        wymagających klientów.
      </InfoSection.Card>

      <InfoSection.Card title="Nasza oferta obejmuje:">
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
      </InfoSection.Card>
    </Box>
  );
};

// eslint-disable-next-line react/display-name
InfoSection.Card = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <Card

      className=" w-1/3 p-5  rounded-lg"
      elevation={2}
    >
      <Header title={title} />

      <Typography
        className="text-justify"
        sx={{ fontSize: 18 }}
        variant="body1"
      >
        {children}
      </Typography>
    </Card>
  );
};
