import React from 'react';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from '@mui/material';

export default function LeftCarusoalButton({carouselRef}){



    const scrollLeft = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({
            left: -250, // Adjust the value based on your card width
            behavior: "smooth",
          });
        }
      };

    return(  <Box
        sx={{ borderRadius: 5, border: "2px solid black", cursor: "pointer" }}
        display={"flex"}
        alignItems={"center"}
        onClick={scrollLeft}
      >
        <ArrowBackIcon />
      </Box>)
}