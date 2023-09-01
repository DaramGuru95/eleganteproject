import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Card({imgSrc,title,subtitle}) {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
        
        <img src={imgSrc} alt={title} width={'300px'} height={'240px'} />
        <Typography variant='subtitle1' sx={{fontWeight:'bold'}}>{title}</Typography>
        <Typography variant='body2'  sx={{fontWeight:500,fontSize:'0.75rem'}} color='#707070' >{subtitle}</Typography>

    </Box>
  )
}
