import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { latestCardData } from "./LatestCardData";
import CardLatest from "./CardLatest";

export default function Latest() {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -250, // Adjust the value based on your card width
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 250, // Adjust the value based on your card width
                behavior: "smooth",
            });
        }
    };
    return (
        <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems={'center'}
            marginY={8}
            marginX={{md:6}}
            padding={{xs:4,md:10}}
        >
            <Box flexBasis={'20%'}>
                <Box display={'flex'} flexDirection={'column'} padding={2} gap={2} >
                <Typography variant="h6" sx={{fontWeight:'bold'}}>LATEST</Typography>
                <Typography variant="caption" sx={{ color: '#101820',lineBreak:'strict',textAlign:'left' }} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</Typography>
                <Box display={'flex'} gap={1}>
                    <Box
                        sx={{ borderRadius: 5, border: "1px solid black", cursor: "pointer" }}
                        display={"flex"}
                        alignItems={"center"}
                        onClick={scrollLeft}
                        paddingX={0.5}
                    >
                        <ArrowBackIcon />
                    </Box>
                    <Box
                        sx={{ borderRadius: 5, border: "1px solid black", cursor: "pointer" }}
                        display={"flex"}
                        alignItems={"center"}
                        onClick={scrollRight}
                        paddingX={0.5}
                    >
                        <ArrowForwardIcon />
                    </Box>
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{ borderRadius: 5, border: "2px solid black", cursor: 'pointer' }}
                        paddingX={3}
                        paddingY={0.5}
                    >
                        <Typography variant="caption">View All</Typography>
                    </Box>

                </Box>
                </Box>

            </Box>
            <Box flexBasis={'70%'} marginLeft={{xs:0,md:10}}  ref={carouselRef}
        width={"100%"}
        display={"flex"}
        justifyContent={'flex-start'}
        gap={{xs:3,sm:4,md:8}}
        sx={{
          overflowX: "hidden",}} >
               
                      {
                        latestCardData?.map(item=><CardLatest imgSrc={item.img} date={item.date} title={item.title} />)
                      }
                     
               
            </Box>
        </Box>
    )
}