import React, { useRef } from "react";
import { Box } from "@mui/material";
import { specialOfferData } from "./data";
import Card from "./Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CardCarsoul({ radius, data, subtitleboldFlag }) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200, // Adjust the value based on your card width
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200, // Adjust the value based on your card width
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      gap={4}
      marginX={4}
      paddingX={10}
    >
      <Box
        sx={{ borderRadius: 5, border: "2px solid black", cursor: "pointer" }}
        display={"flex"}
        alignItems={"center"}
        onClick={scrollLeft}
      >
        <ArrowBackIcon />
      </Box>

      <Box
        ref={carouselRef}
        width={"100%"}
        display={"flex"}
        marginX={5}
        gap={8}
        justifyContent={"space-around"}
        sx={{
          overflowX: "hidden",

        }}
      >
        {data?.map((offer) => (
          <Card
            subtitleboldFlag={subtitleboldFlag}
            radius={radius}
            key={offer.id}
            title={offer.title}
            subtitle={offer.subtitle}
            price={offer.price}
            rating={offer.rating}
            imgSrc={offer.imgSrc}
          />
        ))}
      </Box>

      <Box
        sx={{ borderRadius: 5, border: "2px solid black", cursor: "pointer" }}
        display={"flex"}
        alignItems={"center"}
        onClick={scrollRight}
      >
        <ArrowForwardIcon />
      </Box>
    </Box>
  );
}
