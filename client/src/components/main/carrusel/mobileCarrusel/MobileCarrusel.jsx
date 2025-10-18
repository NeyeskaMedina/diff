// src/components/carousels/MobileCarousel.jsx
import React, { useState } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const images = [
  "/img/mobile1.jpg",
  "/img/mobile2.jpg",
  "/img/mobile3.jpg",
];

const MobileCarousel = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isMobile) return null; // ❌ No se muestra en desktop

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "450px",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`Mobile Slide ${currentIndex + 1}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "0.5s ease",
        }}
      />

      {/* Flechas */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 8,
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 8,
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default MobileCarousel;
