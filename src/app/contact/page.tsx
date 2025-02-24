import { MarginTopSpacer } from "@/components/common/margin-top-spacer";
import { Header } from "@/components/common/text/header";
import { Box, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const Contact = () => {
  return (
    <MarginTopSpacer>
      <Box className="p-5">
        <Card className=" w-full  p-5  rounded-lg border-[rgba(245,158,11,1)] border-2 text-white">
          <Header title="Skontaktuj się z nami!" />
          <Box className="w-full mx-auto my-6 flex justify-between">
            <Card
            elevation={0}
              className="w-1/2 mr-5  flex justify-center items-center flex-col"

            >
              <Box>
                <div className="flex items-center mb-4 ">
                  <IconButton color="primary">
                    <Phone />
                  </IconButton>
                  <Typography variant="h5">+48 123 456 789</Typography>
                </div>
                <div className="flex items-center mb-4">
                  <IconButton color="primary">
                    <Email />
                  </IconButton>
                  <Typography variant="h5">kontakt@przyklad.pl</Typography>
                </div>
                <div className="flex items-center mb-4">
                  <IconButton color="primary">
                    <LocationOn />
                  </IconButton>
                  <Typography variant="h5">
                    {" "}
                    Ul. Przykładowa 15, 00-000 Warszawa
                  </Typography>
                </div>{" "}
              </Box>
            </Card>
            <Box className="w-1/2 h-full">
              {/* Dodajemy adres siedziby */}

              <div className="">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.67125451656!2d21.01497943644111!3d52.22967557540833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc01737a0db7%3A0x7b2cc72d04b6d03d!2sWarszawa!5e0!3m2!1spl!2spl!4v1677221165937!5m2!1spl!2spl"
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
    </MarginTopSpacer>
  );
};

export default Contact;
