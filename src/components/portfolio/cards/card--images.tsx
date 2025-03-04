'use client'
import React from "react";
import { CardListImages } from "./card--list-images";

export const CardImages = ({
  data,
  id,
  isMobileDevice
}: {
  data: Array<{ src: string; alt: string }>;
  id: string;
  isMobileDevice:boolean
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <CardListImages
      data={data}
      handleClick={handleClick}
      isOpen={isOpen}
      key={id}
      isMobileDevice={isMobileDevice}
    />
  );
};
