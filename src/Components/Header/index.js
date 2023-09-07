import {   Box, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import React from "react";
import Logo from "../../../src/assets/header/ColouredELogo-01.svg";

import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (

    <>
      {
        matches ?  <Box display={"flex"} flexDirection={'column'}  marginX={4}>
        <Box display={"flex"} alignItems={"center"}justifyContent={'space-around'} padding={2} flexWrap={'wrap'} >
          <img src={Logo} alt="logo" />
          <Box
            sx={{
              backgroundColor:'#1018200D',
              borderRadius: 5,
              borderColor: '#1018200D',
            }}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'flex-end'}
            width={"35%"}
            height={"5vh"}
          >
            <input style={{width:'80%',border:'none',backgroundColor:'#1018200D'}} />
            <SearchIcon  sx={{padding:1}} />
          </Box>
          <Box display={'flex'} gap={2}>
          <Box display={'flex'} alignItems={'center'} gap={0.5}>
          <PermIdentityOutlinedIcon />
          <Typography variant="subtitle2" >My Account</Typography>
          </Box>
          <Box display={'flex'} alignItems={'center'} gap={2}>
           <Box>
           <ShoppingBagOutlinedIcon sx={{position:'absolute'}} />
           <Box sx={{position:'relative',bottom:-7,right:-10}}>
    
           <Box sx={{borderRadius:5,backgroundColor:'#FFAA4D',color:'#fff',left:-2}} margin={0.3} padding={0.1} component={Typography} variant="overline" >10</Box>
           </Box>
    
           </Box>
           <Typography variant="subtitle2" >Basket</Typography>
          
    
          </Box>
    
          </Box>
    
        </Box>
        <Divider variant="middle"   sx={{marginX:12,color:'#A0A0A076'}} />
        </Box>
     :<Box display={'flex'} padding={1} justifyContent={'space-between'}>
        <img src={Logo} alt="logo" width={'100px'} height={'35px'} />
        <Box display={'flex'} alignItems={'center'}> 
        <Box display={'flex'} alignItems={'center'} gap={0.5}>
          <PermIdentityOutlinedIcon />
          <Typography variant="subtitle2" >My Account</Typography>
          </Box>
          <Box display={'flex'} alignItems={'center'} gap={2}>
           <Box display={'flex'} alignItems={'center'}>
           <ShoppingBagOutlinedIcon sx={{position:'absolute'}} />
           <Box sx={{position:'relative',bottom:-6,right:-10}}>
    
           <Box sx={{borderRadius:5,backgroundColor:'#FFAA4D',color:'#fff',left:-2}} margin={0.3} padding={0.1} component={Typography} variant="overline" >10</Box>
           </Box>
    
           </Box>
           <Typography variant="subtitle2" >Basket</Typography>
          
    
          </Box>
        </Box>
     </Box> }
    </>
    
  );
}
