import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Banner2 from '../../assets/banner/banner3.png'
 
export default function CollectionBanner() {

    return (<Box marginY={10} >
        <Box display={'flex'}  flexDirection={{xs:'column',md:'row'}}>
                <Box padding={10} margin={5}>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={1} >
                    <Typography variant='h3' sx={{fontWeight:'bold'}}>Lorem ipsum dolor sit amet, consetetur</Typography>
                    <Typography variant='subtitle1' >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                    </Typography>
                    <Box sx={{borderRadius:5,border:'1px solid black'}} padding={1} alignSelf={'flex-start'} >
                        <Typography variant='button' sx={{fontWeight:500}} >Find Out More</Typography>
                    </Box>
                </Box>

                </Box>
            
            <Box >
                <Box sx={{backgroundColor:'#1018200D',position:'absolute',borderRadius:5,right:0}} width={'80vh'} height={'70vh'}>

                </Box>
                <Box sx={{position:'relative',top:50,left:-100}} >

               <img  src={Banner2} alt='igBanner' width={'700px'} height={'400px'} />
                </Box>
            </Box>
        </Box>
    </Box>)
}