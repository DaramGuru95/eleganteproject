import React from 'react';
import { Box, Typography } from '@mui/material';
import Banner2 from '../../assets/banner/banner3.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CollectionBanner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (

        <>
            {
                matches ?

                    <Box display={'flex'}  alignItems={'center'} marginTop={10}  >
                       
                        
                        <Box display={'flex'} flexDirection={'column'} gap={3} justifyContent={'center'} marginX={18}>
                        <Box sx={{    border: 'none',
      height: '5px',
      width:'40px',
     
      background: 'transparent',
      backgroundImage: 'linear-gradient(25deg, transparent 33%, #FFAA4D 33%, #FFAA4D 66%, transparent 66%)',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-x',
      backgroundSize: '5px 4px',
    }}></Box>
                            <Typography variant='h4' sx={{fontWeight:900}}>Lorem ipsum dolor sit amet, consetetur</Typography>
                            <Typography variant='caption' sx={{fontWeight:500}} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</Typography>
                            <Box sx={{border:'2px solid black',borderRadius:5}} paddingX={5} paddingY={1} alignSelf={'flex-start'}>
                            <Typography  variant='button' >FIND OUT MORE</Typography>
                        </Box>
                        </Box>
                        <Box sx={{backgroundColor:'#1018200D',position:'absolute',borderRadius:5,right:0}} width={'80vh'} height={'80vh'}>

</Box>
<Box sx={{position:'relative',top:20,left:-100}} >

<img  src={Banner2} alt='igBanner' width={'700px'} height={'400px'} />
</Box>
                       

                    </Box> :
                    <Box display={'flex'} flexDirection={'column'} padding={2}>


                        <img src={Banner2} alt='igBanner' width={'90%'} height={'100%'} />
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={1} >
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Lorem ipsum dolor sit amet, consetetur</Typography>
                            <Typography variant='caption' >
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                            </Typography>
                            <Box sx={{ borderRadius: 5, border: '1px solid black' }} paddingX={3} paddingY={1} alignSelf={'flex-start'} >
                                <Typography variant='caption' sx={{ fontWeight: 500 }} >FIND OUT MORE</Typography>
                            </Box>
                        </Box>

                    </Box>
            }
        </>

    )
}