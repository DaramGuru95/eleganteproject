import { Box, Typography } from "@mui/material";
import React from "react";
import Navigation from "./Navigation";

export default function DiscoverNav({ header, navflag }) {
  return (
    <Box
      width={'100%'}
      height={'25vh'}
      sx={{ backgroundColor: '#1018200D' }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} paddingY={4}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{header}</Typography>
      </Box>
    </Box>
  );
}
