import React from 'react'
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CardLatest({imgSrc,title,date}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>

    {
      matches ?
    <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}  >
       <img src={imgSrc} alt={title} width={'300px'} height={'300px'} />
       <Typography variant='subtitle2' sx={{color:'#1018204D'}}>{date}</Typography>
       <Typography variant='subtitle1' sx={{fontWeight:'bold'}}>{title}</Typography>
    </Box>:

<Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} padding={2}  >
<img src={imgSrc} alt={title} width={'200px'} height={'200px'} />
<Typography variant='subtitle2' sx={{color:'#1018204D'}}>{date}</Typography>
<Typography variant='subtitle1' sx={{fontWeight:'bold'}}>{title}</Typography>
</Box>

    }

    </>
  )
}
