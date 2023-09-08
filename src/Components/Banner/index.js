import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import BannerImg from "../../assets/banner/banner1.png";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
    {
      matches ?  <Box display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} width={"100%"} height={"70vh"}>
      <Grid container mb={2}>
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
          
            <img
              src={BannerImg}
              alt="banner"
              height={"80%"}
              width={"100%"}
              style={{ maxWidth: '100%' }}
            />
        </Grid>
      </Grid>
    </Box> :<Box width={'100%'} margin={0} height={'50vh'}>
      <Box sx={{position: 'absolute',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
        width: '100%',
        height: '50%',
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}} height={'50vh'}>
 <Box  display={'flex'} flexDirection={'column'} alignItems={'center'} >
      <Typography variant="h4" sx={{ textAlign:'center',fontWeight:'bold',color:'#fff',}}>
              Shop New Arrivals
            </Typography>


            <Box display={'flex'} justifyContent={'center'}>

             <Button variant="contained" color="error"  sx={{borderRadius:5,color:'#fff'}}>Shop Now</Button>
            </Box>
           
            
      </Box>
      </Box>
     
      
    </Box>
    }
    </>
   
  );
}
