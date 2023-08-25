import { Box, Typography } from "@mui/material";
import React from "react";

export default function HariProductCard({ imgSrc, title, subtitle,imgHeight,imgWidth,gap }) {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={gap}>
      <img src={imgSrc} alt={title} width={imgWidth} height={imgHeight} />
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="overline">{subtitle}</Typography>
      <Box display={"flex"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ borderRadius: 5, border: "2px solid black" }}
          paddingX={3}
          paddingY={0.5}
        >
          <Typography variant="caption">Shop Now</Typography>
        </Box>
      </Box>
    </Box>
  );
}
