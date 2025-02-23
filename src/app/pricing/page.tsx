import { MarginTopSpacer } from "@/components/common/margin-top-spacer";
import { Header } from "@/components/common/text/header";
import { MultiFileUpload } from "@/components/pricing/pricing";
import { Box, Card, Typography } from "@mui/material";
import React from "react";

const Pricing = () => {
  return (
    <MarginTopSpacer>
      <Box className="p-10">
        <Card
          className=" w-full p-5  rounded-lg"
          elevation={2}
        >
          <Header title={"Planujesz budowę, remont lub modernizację?"} />

          <Card className=" w-full p-5 mb-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
            <Typography>
              Oferujemy rzetelną kalkulację kosztów, dopasowaną do Twoich
              potrzeb i budżetu
            </Typography>
          </Card>
          <Card className=" w-full p-5 mb-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
            <Typography>
              Nasz zespół dokładnie przeanalizuje zakres prac, materiały oraz
              czas realizacji, dzięki temu unikniesz nieprzewidzianych wydatków
              i zyskasz pełną kontrolę nad inwestycją
            </Typography>
          </Card>
          <Card className=" w-full p-5 mb-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
            <Typography>
              Pracujemy na nowoczesnych materiałach i sprawdzonych
              technologiach, aby zapewnić trwałość i estetykę każdej realizacji.
            </Typography>
          </Card>
          <Card className=" w-full p-5 mb-5  rounded-lg bg-[rgba(245,158,11,1)] text-white">
            <Typography>
              Każdy projekt traktujemy indywidualnie, dostosowując rozwiązania
              do potrzeb klienta.
            </Typography>
          </Card>
          <Typography
            className="text-justify font-bold"
            variant="h6"
          >
            Wypełnij formularz online lub skontaktuj się z nami!
          </Typography>
          <Typography
            className="text-justify"
            variant="body1"
            sx={{ fontSize: 16 }}
          >
            Przygotujemy dla Ciebie szczegółową ofertę. Szybko, profesjonalnie i
            bez zobowiązań! Sprawdź, ile może kosztować Twoja inwestycja już
            dziś
          </Typography>

          <Typography
            className="text-justify"
            variant="body1"
            sx={{ fontSize: 16, marginTop: 3 }}
          >
            Aby przygotować dla Ciebie dokładną wycenę, potrzebujemy kilku
            kluczowych dokumentów:
          </Typography>
          <ul style={{ fontSize: 16, marginTop: 3, marginBottom: 3 }}>
            <li className="font-bold">
              -Projekt architektoniczny lub aranżacyjny
            </li>
            <li className="font-bold">-Przedmiar robót</li>
            <li className="font-bold">-Specyfikacja materiałów</li>
            <li className="font-bold">-Rzuty i wymiary pomieszczeń</li>
            <li className="font-bold">-Zdjęcia stanu obecnego</li>
            <li className="font-bold">-Zakres prac i oczekiwania klienta</li>
            <li className="font-bold">
              -Pozwolenia lub zgłoszenia (jeśli wymagane)
            </li>
          </ul>
          <Typography
            className="text-justify"
            variant="body1"
            sx={{ fontSize: 16 }}
          >
            Skorzystaj z naszej rzetelnej i darmowej wyceny już teraz!
          </Typography>
          <MultiFileUpload />
        </Card>
      </Box>
    </MarginTopSpacer>
  );
};

export default Pricing;
