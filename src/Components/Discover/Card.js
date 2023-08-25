import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Card({imgSrc,subtitle,title,price,rating,radius,subtitleboldFlag}) {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} >
        <img src={imgSrc}  alt={title} width={'200px'} height={'200px'} style={{borderRadius:radius}} />
        <Typography variant='overline' sx={{fontWeight:subtitleboldFlag,color:'gray'}} >{subtitle}</Typography>
        <Typography variant='caption' sx={{fontWeight:'bold'}} >{title}</Typography>
        <Typography variant='subtitle1' sx={{fontWeight:'bold'}} >{price}</Typography>
        {/* <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly size="small" /> */}
    </Box>
  )
}
