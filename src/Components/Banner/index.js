import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import BannerImg from "../../assets/banner/banner1.png";

export default function Banner() {
  return (
    <Box display={"flex"} width={"100%"} height={"80vh"}>
      <Grid container mt={2} mb={2}>
        <Grid item xs={12} md={6}>
          <Box
            flexBasis={"40%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            position={'relative'}
          >
            <Box width={'35%'}>
              <Typography variant="h2" sx={{ fontWeight: 900 }}  >
                Shop New Arrivals
              </Typography>

            </Box>

            <Box
              display={"flex"}
              padding={1}
              marginTop={3}
              sx={{
                backgroundColor: '#E03c31',
                borderRadius: 10,
                color: "#fff",
                left: -50,
                position: 'relative'
              }}
            >
              <Typography variant="subtitle1" sx={{ color: '#fff', paddingX: 2 }}>Shop Now</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box position={'relative'} sx={{ top: -98 }} >
            <img
              src={BannerImg}
              alt="banner"
              height={"100%"}
              width={"100%"}
            />
          </Box>
        </Grid>

      </Grid>


    </Box>
  );
}
