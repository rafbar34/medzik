"use client";
import React from "react";
import { CardListImages } from "./card--list-images";

export const CardImages = ({
  data,
  id,
  isMobileDevice,
}: {
  data: Array<{
    upload_id: string;
    alt: string;
    custom_data: {
      url: string | undefined;
    };
  }>;
  id: string;
  isMobileDevice: boolean;
}) => {
  const [IsOpenModalData, setIsOpenModalData] = React.useState<{
    url: undefined | string | null;
    id: string | number | null | undefined;
  }>({ url: null, id: null });

  const handleClick = (
    url: undefined | string | null,
    id: undefined | null | number,
    type?:string
  ) => {
    if(type !=="video" )
    setIsOpenModalData({ url, id });
  };

  const handleClose = () => {
    setIsOpenModalData({ url: null, id: null });
  };

  return (
    <CardListImages
      data={data}
      handleClick={handleClick}
      handleClose={handleClose}
      IsOpenModalData={IsOpenModalData}
      key={id}
      isMobileDevice={isMobileDevice}
    />
  );
};
