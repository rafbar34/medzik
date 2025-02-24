import { ImageList, ImageListItem, Modal } from "@mui/material";
import React from "react";

export const CardListImages = ({
  isOpen,
  handleClick,
  data,
}: {
  isOpen: boolean;
  handleClick: () => void;
  data: Array<{ src: string; alt: string }>;
}) => {
  return (
    <ImageList
      sx={{ width: "100%" }}
      cols={3}
      className="mt-20"
    >
      {data.map((item) => (
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
      ))}
    </ImageList>
  );
};
