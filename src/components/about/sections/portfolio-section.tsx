"use client";
import { CustomButton } from "@/components/common/button/button";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

const data = [
  {
    src: "/pictures/mock3.jpg",
    alt: "house1",
  },
  {
    src: "/pictures/mock11.png",
    alt: "house2",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house34",
  },
  {
    src: "/pictures/mock6.png",
    alt: "house423",
  },
  {
    src: "/pictures/mock11.png",
    alt: "house24",
  },
  {
    src: "/pictures/mock3.jpg",
    alt: "house31",
  },

];
const PortfolioDemoSection = () => {
  return (
    <Box
      className="w-full border-[1.5px] border-amber-500/50 rounded-lg relative overflow-hidden group bg-white/40"
    >

      <ImageList
        sx={{ width: "100%", height: "100%" }}
        cols={3}
      >
        {data.map((item) => (
          <ImageListItem key={item.alt}>
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          <Link href={"/portfolio"}>
            <CustomButton
              className="font-medium p-2 text-white"
              width={"1/5"}
              title="Zobacz więcej"
            />
          </Link>
        </motion.div>
      </ImageList>
    </Box>
  );
};

export default PortfolioDemoSection;
