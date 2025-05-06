import { Header } from "@/components/common/text/header";
import { Box, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import {
  Email,
  Phone,
  LocationOn,
  PhoneAndroid,
  Person,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <Box className={"bg-white/30 flex items-center h-screen sm:px-10"}>
      <Card
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.851)" }}
        className="sm:h-auto h-screen w-full pt-14 sm:pt-4 pb-14  rounded-lg sm:border-[rgba(245,158,11,1)] border-2 text-white"
      >
        <Header title="Skontaktuj się z nami!" />
        <Box className="w-full xl:flex-row flex-col flex justify-evenly pt-5">
          <Card
            elevation={2}
            className="xl:w-1/3  xl:mr-5 px-2 sm:px-0  flex justify-center flex-col"
          >
            <Box>
              <div className="flex items-center mb-4 ">
                <IconButton color="primary">
                  <Person />
                </IconButton>
                <Typography variant="h5">Łukasz Niemiec </Typography>
              </div>
              <div className="flex items-center mb-4 ">
                <IconButton color="primary">
                  <Phone />
                </IconButton>
                <Typography variant="h5">+48 881 386 098 </Typography>
              </div>
              <div className="flex items-center mb-4 ">
                <IconButton color="primary">
                  <PhoneAndroid />
                </IconButton>
                <Typography variant="h5">570414427 </Typography>
              </div>
              <div className="flex items-center mb-4">
                <IconButton color="primary">
                  <Email />
                </IconButton>
                <Typography variant="h5">lookrem79@gmail.com</Typography>
              </div>
              <div className="flex items-center mb-4">
                <IconButton color="primary">
                  <LocationOn />
                </IconButton>
                <Typography variant="h5">
                  {" "}
                  Zawadka 68 38-102 Strzyżów
                </Typography>
              </div>{" "}
            </Box>
          </Card>
          <Box className="xl:w-1/2 h-full mt-2 xl:mt-0">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25602.578933546165!2d22.0000!3d50.0413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfbfb3ba7c87b%3A0x6e5ddf8df430cfbf!2sRzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1680000000000!5m2!1spl!2spl"
                width="100%"
                height="270"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Contact;
