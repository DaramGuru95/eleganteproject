import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { topnavlinks } from "../Header/topnavlinks";

export default function MainNavigation() {
  return (
    <Box padding={4} display={'flex'} justifyContent={'center'}>
      <Box>
      <Grid
  
  container
   spacing={4}
 >
   {topnavlinks.map((navlink) => (
     <Grid item  key={navlink.id}> <Typography
    
     variant="subtitle1"
     component={Link}
     sx={{
       color: '#101820',
       textDecoration: "none",
       cursor: "pointer",
       fontWeight:'bold'
     }}
   >
     {navlink.link}
   </Typography></Grid>
    
   ))}
 </Grid>
      </Box>

    </Box>
   
  );
}
