/* eslint-disable @next/next/no-img-element */

import { ImageList, ImageListItem, Modal } from "@mui/material";
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
  handleClick: (url: string | undefined, id: number, type?: string) => void;
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
  return (
    <ImageList
      sx={
        isMobileDevice
          ? { width: "100%", display: "flex", flexDirection: "column" }
          : { width: "100%" }
      }
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
};

const DesktopImageListItem = ({
  handleClick,
  handleClose,
  item,
  IsOpenModalData,
  id,
}: {
  handleClick: (url: string | undefined, id: number, type?: string) => void;
  handleClose: () => void;
  item: {
    upload_id: string;
    alt: string;
    custom_data: {
      url: string | undefined;
      type?: string;
    };
  };
  id: number;
  IsOpenModalData: {
    url: undefined | string | null;
    id: string | number | null | undefined;
  } | null;
}) => {
  return (
    <>
      <ImageListItem
        onClick={() =>
          handleClick(item.custom_data.url, id, item.custom_data?.type)
        }
        key={item.alt}
      >
        {item?.custom_data?.type === "video" ? (
          <video
            className="w-full h-full object-cover"
            controls
          >
            <source
              src={item.custom_data.url}
              type="video/mp4"
            />
            Twoja przeglądarka nie obsługuje wideo.
          </video>
        ) : (
          <img
            src={item.custom_data.url}
            alt={item.alt}
            loading="lazy"
            className="max-h-[350px]"
          />
        )}
      </ImageListItem>
      <Modal
        open={IsOpenModalData?.url === item.custom_data.url}
        onClick={() => handleClose()}
        className="flex justify-center items-center p-10"
      >
        <img
          src={item.custom_data.url}
          alt={item.alt}
          loading="lazy"
         
          style={{ width:'80vw', height:'80vh'}}
        />
      </Modal>
    </>
  );
};

