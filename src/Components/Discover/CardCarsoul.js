import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Card from "./Card";
import LeftCarusoalButton from "../CarsoulControlButtons/LeftCarusolButton";
import RightCarusoalButton from "../CarsoulControlButtons/RightCarusoalButton";

export default function CardCarsoul({radius,data,subtitleboldFlag, carousalButtonsControlFlag}) {

  const carouselRef = useRef(null);


  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      gap={5.5}
      marginX={4}
      paddingX={10}
     
    >


{  carousalButtonsControlFlag &&  <LeftCarusoalButton carouselRef={carouselRef} />}

  

      <Box
        ref={carouselRef}
        width={"100%"}
        display={"flex"}
        marginX={5}
        gap={2}
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
      {
   !carousalButtonsControlFlag && <Box display={'flex'}  gap={2}  sx={{top:-170,position:'relative',right:40}} >
<LeftCarusoalButton carouselRef={carouselRef} />
<RightCarusoalButton carouselRef={carouselRef} />

   </Box>
  }

   
     {carousalButtonsControlFlag && <RightCarusoalButton carouselRef={carouselRef} />}
    </Box>
  );
}
