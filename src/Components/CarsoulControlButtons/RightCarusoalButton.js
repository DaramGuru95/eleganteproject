import React from 'react';
import { Box } from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function RightCarusoalButton({carouselRef}){



    const scrollRight = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({
            left: 200, 
            behavior: "smooth",
          });
        }
      };

    return(  <Box
        sx={{ borderRadius: 5, border: "2px solid black", cursor: "pointer" }}
        display={"flex"}
        alignItems={"center"}
        onClick={scrollRight}
      >
        <ArrowForwardIcon />
      </Box>)
}