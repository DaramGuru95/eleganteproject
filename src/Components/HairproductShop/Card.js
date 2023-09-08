import React from "react";
import { Box,  Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function HariProductCard({ imgSrc, title, subtitle,imgHeight,imgWidth,gap }) {


  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
   { matches ? <Box display={"flex"} flexDirection={"column"} gap={2} padding={1}>
      <img src={imgSrc} alt={title} width={imgHeight} height={imgWidth} />
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="overline">{subtitle}</Typography>
      <Box display={"flex"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ borderRadius: 5, border: "2px solid black",cursor:'pointer' }}
          paddingX={3}
          paddingY={0.5}
        >
          <Typography variant="caption" >Shop Now</Typography>
        </Box>
      </Box>
    </Box> : 
    <Box display={'flex'} flexDirection={'column'} gap={1} padding={2}>
      <img src={imgSrc} alt={title} width={'100%'} height={'100%'} />
      <Typography variant="caption" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="caption">{subtitle}</Typography>
      <Box
      alignSelf={'flex-start'}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ borderRadius: 5, border: "2px solid black",cursor:'pointer' }}
          paddingX={3}
          paddingY={0.5}
        >
          <Typography variant="caption" >Shop Now</Typography>
        </Box>
    </Box>}
    </>
   
  );
}
