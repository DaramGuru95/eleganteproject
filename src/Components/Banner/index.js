import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import BannerImg from "../../assets/banner/banner1.png";

export default function Banner() {
  return (
    <Box display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} width={"100%"} height={"80vh"}>
      <Grid container mt={2} mb={2}>
        <Grid item xs={12} md={4}>
          <Box
            flexBasis={{ xs: "100%", md: "40%" }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            padding={{ xs: 3, md: 10 }}
          >
            <Typography variant="h2" sx={{ fontWeight: 900, width: { md: '35%' } }}>
              Shop New Arrivals
            </Typography>
            <Box
              display={"flex"}
              padding={1}
              marginTop={3}
              sx={{
                backgroundColor: '#E03c31',
                borderRadius: 10,
                color: "#fff",
              }}
            
            >
              <Typography variant="subtitle1" sx={{ color: '#fff', paddingX: 2 }}>
                Shop Now
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box position={'relative'} marginTop={{ xs: -2, md: -14,lg:-11.5,xl:-14}} height={'80vh'}>
            <img
              src={BannerImg}
              alt="banner"
              height={"100%"}
              width={"100%"}
              style={{ maxWidth: '100%' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
