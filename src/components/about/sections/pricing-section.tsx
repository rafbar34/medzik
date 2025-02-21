import { CustomButton } from "@/components/common/button/button";
import { Header } from "@/components/common/text/header";
import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

export const PricingSection = () => {
  return (
    <Box className="flex justify-center w-full h-screen ">
      <Box className="w-5/6 flex  border-[1px] border-amber-500/50 rounded-lg h-2/3">
        <Card
          className=" relative  w-1/2  bg-[url('/pictures/mock6.png')] bg-no-repeat bg-cover bg-center "
          elevation={0}
        >
          <Box className="absolute inset-0 bg-white opacity-60"></Box>{" "}
        </Card>
        <Card
          variant="outlined"
          className="  w-1/2 p-5 bg-white/40  flex flex-col justify-between  "
          elevation={0}
        >
          <Header
            title="Wyceń swój projekt"
            className="relative z-10"
          />
          <Typography
            className="text-justify relative z-10"
            sx={{ fontSize: 18 }}
            variant="body1"
          >
            {/* Planujesz budowę, remont lub modernizację?
        Skorzystaj z naszej darmowej wyceny! Oferujemy rzetelną kalkulację
        kosztów, dopasowaną do Twoich potrzeb i budżetu. Nasz zespół
        dokładnie przeanalizuje zakres prac, materiały oraz czas realizacji.
        Dzięki temu unikniesz nieprzewidzianych wydatków i zyskasz pełną
        kontrolę nad inwestycją. Współpracujemy zarówno z klientami
        indywidualnymi, jak i firmami. Wypełnij formularz online lub
        skontaktuj się z nami, a przygotujemy dla Ciebie szczegółową ofertę.
        Szybko, profesjonalnie i bez zobowiązań! Sprawdź, ile może kosztować
        Twoja inwestycja już dziś.  Pracujemy na nowoczesnych
          materiałach i sprawdzonych technologiach, aby zapewnić trwałość i
          estetykę każdej realizacji. Zajmujemy się zarówno remontami oraz
          wykończeniami. Każdy projekt traktujemy indywidualnie,
          dostosowując rozwiązania do potrzeb klienta. Skorzystaj z naszej
          darmowej wyceny! Oferujemy rzetelną kalkulację kosztów, dopasowaną
          do Twoich potrzeb i budżetu.*/}
            Oferujemy kompleksowe usługi budowlane od fundamentów po wykończenie
            wnętrz. Dzięki wykwalifikowanemu zespołowi gwarantujemy najwyższą
            jakość wykonania. Skorzystaj z naszej darmowej wyceny i dowiedz się
            więcej, klikając w przycisk poniżej!
          </Typography>
          <Box className="w-full flex justify-center  relative z-10">
            <CustomButton
              width={"1/4"}
              title="Wycena"
            />
          </Box>
        </Card>
        <Card />
      </Box>
    </Box>
  );
};
