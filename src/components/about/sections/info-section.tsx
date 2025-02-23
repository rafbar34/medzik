import { Header } from "@/components/common/text/header";
import { Box, Card, Typography } from "@mui/material";
import React, { ReactNode } from "react";

export const InfoSection = () => {
  return (
    <Box className="flex justify-evenly mb-16">
      <InfoSection.Card title="Dlaczego my ?">
        <Card className=" w-full  p-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
          <Typography>
            Specjalizujemy się w kompleksowych wykończeniach
            wnętrz, remontach oraz adaptacjach mieszkań, domów i lokali
            użytkowych.
          </Typography>
        </Card>
        <Card className=" w-full  p-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
          <Typography>
            Dzięki wieloletniemu doświadczeniu oraz dbałości o każdy detal,
            realizujemy nawet najbardziej wymagające projekty.
          </Typography>
        </Card>
        <Card className=" w-full  p-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
          <Typography>
            Nasza misja to dostarczenie usług najwyższej jakości, które spełnią
            oczekiwania nawet najbardziej wymagających klientów.
          </Typography>
        </Card>
        <Card className=" w-full  p-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
          <Typography>
            Nasz zespół szczegółowo analizuje zakres prac, materiały oraz czas
            realizacji
          </Typography>
        </Card>
      </InfoSection.Card>

      <InfoSection.Card title="Nasza oferta obejmuje:">
        <Card className=" w-full p-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
          <Typography>Malowanie, szpachlowanie, tapetowanie</Typography>
        </Card>
        <Card className=" w-full p-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
          <Typography>Układanie płytek, paneli, parkietów</Typography>
        </Card>
        <Card className=" w-full p-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
          <Typography>
            Montaż sufitów podwieszanych i ścianek działowych
          </Typography>
        </Card>
        <Card className=" w-full p-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
          <Typography>Instalacje elektryczne i hydrauliczne</Typography>
        </Card>
        <Card className=" w-full p-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
          <Typography>Kompleksowe remonty łazienek i kuchni </Typography>
        </Card>
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
      className=" w-2/5 p-5 h-auto rounded-lg flex flex-col gap-2 justify-between "
      elevation={2}
    >
      <Header title={title} />
      {children}
    </Card>
  );
};
