import { Box, Drawer, Grid, IconButton, MenuItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { navlinks } from './navlinks';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MenuIcon from '@mui/icons-material/Menu';
import { topnavlinks } from '../Header/topnavlinks';

export default function TopNavigation() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [show,setShow]=useState();
  const [state, setState] = React.useState(false);

  useEffect(()=>{
    setShow(matches)
  },[matches]);


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  const handleShow =()=>{
    setShow(!matches)
  }

  const handleClose = ()=>{
    setShow(false)
  }

  return (
    <Box width={'100%'} sx={{ backgroundColor: '#101820' }} display={'flex'} justifyContent={matches ?'center': 'space-between'}  >
     {show ? <Grid container  spacing={2} justifyContent={'center'} alignItems={'center'} columns={{ xs: 4, sm: 2, md: 12 }}>
        {
          navlinks?.map(navlink =>
          <Grid item sx={{placeSelf:'center'}} key={navlink.id}><Typography variant='overline' key={navlink.id}
          color={'#fff'} 
        >{navlink.link}</Typography></Grid>
        
         
           )
        }
        {(!matches) && <Grid item> <IconButton size='small' onClick={handleClose} ><ArrowDropUpIcon sx={{color:'#fff'}}/></IconButton></Grid> }
       
      </Grid> :<Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
        <IconButton  onClick={toggleDrawer('left', true)}><MenuIcon sx={{color:'#fff'}} /></IconButton>
        <IconButton size='small' onClick={handleShow} ><ArrowDropDownIcon sx={{color:'#fff'}}/></IconButton>
        
        <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
           {
            topnavlinks?.map(item=><MenuItem key={item.id} variant='subtitle1'>{item.link}</MenuItem>)
           }
          </Drawer>
        </Box> }
    </Box>
  )
}
