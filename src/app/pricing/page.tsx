import { Header } from "@/components/common/text/header";
import { MultiFileUpload } from "@/components/pricing/pricing";
import { Box, Card, Paper, Typography } from "@mui/material";
import React from "react";

const Pricing = () => {
  return (
    <Paper
      elevation={0}
      className=" full min-h-screen w-full pt-14 flex items-center justify-center"
      style={{
        backgroundImage: "url('/pictures/mock11.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Box className="sm:p-10 opacity-90">
        <Card
          className=" w-full p-5  border-[1.5px] border-[light_color] rounded-lg"
          elevation={2}
        >
          <Header
            title={"Wypełnij formularz online lub skontaktuj się z nami!"}
          />

          <Typography
            className="text-center"
            variant="body1"
            sx={{ fontSize: 18 }}
          >
            Przygotujemy dla Ciebie szczegółową ofertę. Szybko, profesjonalnie i
            bez zobowiązań! Sprawdź, ile może kosztować Twoja inwestycja już
            dziś!
          </Typography>

          <Typography
            className="text-justify"
            variant="body1"
            sx={{ fontSize: 20, marginTop: 3 }}
          >
            Aby przygotować dla Ciebie dokładną wycenę, potrzebujemy kilku
            kluczowych dokumentów:
          </Typography>
          <ul style={{ fontSize: 16, marginTop: 3, marginBottom: 20 }}>
            <li className="font-bold">-Wizualizacja pomieszczeń</li>
            <li className="font-bold">-Przedmiar robót</li>
            <li className="font-bold">-Specyfikacja materiałów</li>
            <li className="font-bold">-Rzuty i wymiary pomieszczeń</li>
            <li className="font-bold">-Zdjęcia stanu obecnego</li>
            <li className="font-bold">-Zakres prac i oczekiwania klienta</li>
            <li className="font-bold">
              -Pozwolenia lub zgłoszenia (jeśli wymagane)
            </li>
          </ul>
          <MultiFileUpload />
        </Card>
      </Box>
    </Paper>
  );
};

export default Pricing;
