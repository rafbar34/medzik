import { Header } from "@/components/common/text/header";
import { Box, Card, Typography } from "@mui/material";
import React, { ReactNode } from "react";

export const InfoSection = () => {
  return (
    <Box className="flex justify-evenly mb-16">
      <InfoSection.Card title="Dlaczego my ?">
        <InfoSection.InfoSquare>
          Specjalizujemy się w kompleksowych wykończeniach wnętrz, remontach
          oraz adaptacjach mieszkań, domów i lokali użytkowych.
        </InfoSection.InfoSquare>

        <InfoSection.InfoSquare>
          Dzięki wieloletniemu doświadczeniu oraz dbałości o każdy detal,
          realizujemy nawet najbardziej wymagające projekty.
        </InfoSection.InfoSquare>
        <InfoSection.InfoSquare>
          Nasza misja to dostarczenie usług najwyższej jakości, które spełnią
          oczekiwania nawet najbardziej wymagających klientów.
        </InfoSection.InfoSquare>
        <InfoSection.InfoSquare>
          Nasz zespół szczegółowo analizuje zakres prac, materiały oraz czas
          realizacji
        </InfoSection.InfoSquare>
      </InfoSection.Card>

      <InfoSection.Card title="Nasza oferta obejmuje:">
        <InfoSection.InfoSquare>
          Malowanie, szpachlowanie, tapetowanie
        </InfoSection.InfoSquare>
        <InfoSection.InfoSquare>
          Układanie płytek, paneli, parkietów
        </InfoSection.InfoSquare>
        <InfoSection.InfoSquare>
          Montaż sufitów podwieszanych i ścianek działowych
        </InfoSection.InfoSquare>
        <InfoSection.InfoSquare>
          Instalacje elektryczne i hydrauliczne
        </InfoSection.InfoSquare>
        <InfoSection.InfoSquare>
          Kompleksowe remonty łazienek i kuchni{" "}
        </InfoSection.InfoSquare>
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
      className=" w-2/5 p-5 h-auto rounded-lg flex flex-col gap-2 justify-between shadow-xl"
      elevation={2}
    >
      <Header title={title} />
      {children}
    </Card>
  );
};
// eslint-disable-next-line react/display-name
InfoSection.InfoSquare = ({ children }: { children: ReactNode }) => {
  return (
    <Card
      sx={{ backgroundColor: "rgba(245,158,11,1)" }}
      className=" w-full  p-5  rounded-lg text-white"
    >
      <Typography
        sx={{ color: "white" }}
        className="font-semibold"
      >
        {children}
      </Typography>
    </Card>
  );
};
