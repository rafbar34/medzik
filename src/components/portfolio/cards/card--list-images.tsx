/* eslint-disable @next/next/no-img-element */

import CustomCarousel from "@/components/common/carousel/carousel";
import { Box, ImageList, ImageListItem, Modal } from "@mui/material";
import React from "react";

export const CardListImages = ({
  IsOpenModalData,
  handleClick,
  data,
  isMobileDevice,
  handleClose,
}: {
  IsOpenModalData: {
    url: undefined | string | null;
    id: string | number | null | undefined;
  };
  handleClick: (url: string | undefined, id: number) => void;
  handleClose: () => void;
  data: Array<{
    upload_id: string;
    alt: string;
    custom_data: {
      url: string | undefined;
    };
  }>;
  isMobileDevice: boolean;
}) => {
  if (isMobileDevice) {
    return (
      <MobileCarousel
        handleClose={handleClose}
        data={data}
        IsOpenModalData={IsOpenModalData}
        handleClick={handleClick}
      />
    );
  } else {
    return (
      <ImageList
        sx={{ width: "100%" }}
        cols={3}
        className="mt-20"
      >
        {data &&
          data.map((item, index) => {
            return (
              <DesktopImageListItem
                key={item.upload_id + index}
                id={index}
                item={item}
                IsOpenModalData={IsOpenModalData}
                handleClick={handleClick}
                handleClose={handleClose}
              />
            );
          })}
      </ImageList>
    );
  }
};

const DesktopImageListItem = ({
  handleClick,
  handleClose,
  item,
  IsOpenModalData,
  id,
}: {
  handleClick: (url: string | undefined, id: number) => void;
  handleClose: () => void;
  item: {
    upload_id: string;
    alt: string;
    custom_data: {
      url: string | undefined;
    };
  };
  id: number;
  IsOpenModalData: {
    url: undefined | string | null;
    id: string | number | null | undefined;
  } | null;
}) => (
  <>
    <ImageListItem
      onClick={() => handleClick(item.custom_data.url, id)}
      key={item.alt}
    >
      <img
        src={item.custom_data.url}
        alt={item.alt}
        loading="lazy"
        className="max-h-[350px]"
      />
    </ImageListItem>
    <Modal
      open={IsOpenModalData?.url === item.custom_data.url}
      onClick={() => handleClose()}
      className="flex justify-center items-center px-56"
    >
      <img
        src={item.custom_data.url}
        alt={item.alt}
        loading="lazy"
        width={"60%"}
        height={"60vh"}
      />
    </Modal>
  </>
);
const MobileCarousel = ({
  handleClick,
  handleClose,
  data,
  IsOpenModalData,
}: {
  handleClick: (url: string | undefined, id: number) => void;
  handleClose: () => void;
  data: Array<{
    upload_id: string;
    alt: string;
    custom_data: {
      url: string | undefined;
    };
  }>;
  IsOpenModalData: {
    url: undefined | string | null;
    id: string | number | null | undefined;
  } | null;
}) => (
  <Box sx={{ marginTop: 8, paddingBottom: 8 }}>
    <CustomCarousel>
      {data.map((item, index) => (
        <div key={item.alt}>
          <img
            src={item.custom_data.url}
            alt={item.alt}
            onClick={() => handleClick(item.custom_data.url, index)}
            loading="lazy"
          />
          <Modal
            open={!!IsOpenModalData?.url}
            onClose={handleClose}
            className="flex justify-center items-center"
          >
            <img
              src={item.custom_data.url}
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
