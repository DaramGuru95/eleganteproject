import { Box, Typography } from '@mui/material'
import React from 'react'

export default function CardLatest({imgSrc,title,date}) {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
       <img src={imgSrc} alt={title} width={'300px'} height={'300px'} />
       <Typography variant='subtitle2' sx={{color:'#1018204D'}}>{date}</Typography>
       <Typography variant='subtitle1' sx={{fontWeight:'bold'}}>{title}</Typography>
    </Box>
  )
}
