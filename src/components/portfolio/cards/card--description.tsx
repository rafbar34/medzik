import { Header } from "@/components/common/text/header";
import { Card, Typography } from "@mui/material";
import React, { ReactNode } from "react";

export const CarDescription = () => {
  return (
    <Card
      className=" w-1/2 p-5  bg-white/40  rounded-lg"
      elevation={2}
    >
      <Header
        title={"Mieszkanie 55 m2"}
        textAlign="left"
        className="text-[#f5970b]"
      />
      <CarDescription.Description>
        Kompleksowy remont mieszkania o powierzchni 55 m², wykonany przez [Nazwa
        Twojej Firmy]. Projekt obejmował pełne odświeżenie wnętrza, modernizację
        instalacji oraz wysokiej jakości wykończenie, zapewniające
        funkcjonalność i estetykę.
        <br />
        <br />
        Zakres prac:
        <br />
        &bull; Prace budowlane i wykończeniowe, w tym wyrównanie ścian, nowe
        tynki, gładzie i malowanie.
        <br />
        &bull;Montaż podłóg, w tym paneli, gresu lub winylu, wraz z wyrównaniem
        i izolacją podłoża.
        <br />
        &bull;Modernizacja kuchni, obejmująca nową zabudowę, montaż sprzętu AGD
        i dopracowanie detali.
        <br />
        &bull;Kompleksowy remont łazienki, w tym układanie płytek, montaż
        nowoczesnej armatury oraz zabudowy podtynkowej.
        <br />
        &bull;Wymiana instalacji elektrycznej, montaż punktowego oświetlenia
        LED, nowych kontaktów i włączników.
        <br />
        &bull;Montaż drzwi, listew przypodłogowych i elementów dekoracyjnych.
        <br />
        <br />
        Efekt końcowy to eleganckie, nowoczesne wnętrze, dopasowane do potrzeb
        mieszkańców. Przykład tej realizacji pokazuje dbałość o detale, wysoką
        jakość wykonania oraz terminowość prac.
      </CarDescription.Description>
    </Card>
  );
};
// eslint-disable-next-line react/display-name
CarDescription.Description = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      className="text-justify "
      sx={{ fontSize: 18 }}
      variant="body1"
      
    >
      {children}
    </Typography>
  );
};
