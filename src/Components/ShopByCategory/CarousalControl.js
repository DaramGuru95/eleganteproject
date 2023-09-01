import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CarousalControl({title,subtitle,buttontext,controlsflexDirection,controlsjustifyContent,subtitleboldFlag,carousalButtonsControlFlag}) {
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
    <Box display={'flex'} flexDirection={controlsflexDirection}  justifyContent={controlsjustifyContent} marginX={4}  >
        <Box display={'flex'} flexDirection={'column'} flexBasis={'30%'}>

        <Typography variant='h6' sx={{fontWeight:'bold'}}>{title}</Typography>
        <Typography variant='overline' sx={{fontWeight:subtitleboldFlag}}>{subtitle}</Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={2}>
        {carousalButtonsControlFlag &&<Box
        sx={{ borderRadius: 5, border: "1px solid black", cursor: "pointer" }}
        display={"flex"}
        alignItems={"center"}
        onClick={scrollLeft}
      >
        <ArrowBackIcon />
      </Box>}
    { carousalButtonsControlFlag && <Box
        sx={{ borderRadius: 5, border: "1px solid black", cursor: "pointer" }}
        display={"flex"}
        alignItems={"center"}
        onClick={scrollRight}
      >
        <ArrowForwardIcon />
      </Box>}
        <Box display={"flex"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ borderRadius: 5, border: "2px solid black",cursor:'pointer' }}
          paddingX={3}
          paddingY={0.5}
        >
          <Typography variant="caption">{buttontext}</Typography>
        </Box>
      </Box>
        </Box>


    </Box>
  )
}
