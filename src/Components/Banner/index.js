import React from "react";
import { Box, Typography } from "@mui/material";
import BannerImg from "../../assets/banner/banner1.png";
import theme from "../../Theme";

export default function Banner() {
  return (
    <Box display={"flex"} width={"100%"} height={"80vh"}>
      <Box
        flexBasis={"40%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        position={'relative'}sx={{top:-98}}
      >
        <Box width={'35%'}>
        <Typography variant="h2" sx={{fontWeight:900}}  >
          Shop New Arrivals
        </Typography>

        </Box>

        <Box
          display={"flex"}
          padding={1}
          marginTop={3}
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: 10,
            color: "#fff",
            left:-50,
            position:'relative'
          }}
        >
          <Typography variant="subtitle1" sx={{color:'#fff',paddingX:2}}>Shop Now</Typography>
        </Box>
      </Box>
      <Box flexBasis={"60%"} position={'relative'}sx={{top:-98}} >
        <img
          src={BannerImg}
          alt="banner"
          height={"100%"}
          width={"100%"}
        />
      </Box>
    </Box>
  );
}
