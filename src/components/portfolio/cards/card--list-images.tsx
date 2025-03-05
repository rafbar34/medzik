/* eslint-disable @next/next/no-img-element */

import CustomCarousel from "@/components/common/carousel/carousel";
import { Box, ImageList, ImageListItem, Modal } from "@mui/material";
import React from "react";

export const CardListImages = ({
  isOpen,
  handleClick,
  data,
  isMobileDevice
}: {
  isOpen: boolean;
  handleClick: () => void;
  data: Array<{ src: string; alt: string }>;
  isMobileDevice:boolean
}) => {

  if (isMobileDevice) {
    return <MobileCarousel
      data={data}
      isOpen={isOpen}
      handleClick={handleClick}
    />;
  } else {
    return (
      <ImageList
        sx={{ width: "100%" }}
        cols={3}
        className="mt-20"
      >
        {data.map((item) => {
          return (
            <DesktopImageListItem
              key={item.alt}
              item={item}
              isOpen={isOpen}
              handleClick={handleClick}
            />
          );
        })}
      </ImageList>
    );
  }
};

const DesktopImageListItem = ({
  handleClick,
  item,
  isOpen,
}: {
  handleClick: () => void;
  item: { src: string; alt: string };
  isOpen: boolean;
}) => (
  <ImageListItem
    onClick={handleClick}
    key={item.alt}
  >
    <img
      src={item.src}
      alt={item.alt}
      loading="lazy"
    />
    <Modal
      open={isOpen}
      onClose={handleClick}
      className="flex justify-center items-center"
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        width={"80%"}
        height={"80%"}
      />
    </Modal>
  </ImageListItem>
);
const MobileCarousel = ({
  handleClick,
  data,
  isOpen,
}: {
  handleClick: () => void;
  data: Array<{ src: string; alt: string }>;
  isOpen: boolean;
}) => (
  <Box sx={{marginTop:8, paddingBottom:8}}>

  <CustomCarousel>
    {data.map((item) => (
      <div key={item.alt}>
        <img
          src={item.src}
          alt={item.alt}
          onClick={handleClick}
          loading="lazy"
          />
        <Modal
          open={isOpen}
          onClose={handleClick}
          className="flex justify-center items-center"
          >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            width={"80%"}
            height={"80%"}
            />
        </Modal>
      </div>
    ))}
  </CustomCarousel>
    </Box>
);
