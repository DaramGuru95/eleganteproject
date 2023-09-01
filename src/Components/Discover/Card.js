import { Box, Rating, Typography } from '@mui/material'
import React from 'react'

export default function Card({imgSrc,subtitle,title,price,rating,radius,subtitleboldFlag}) {
  console.log(radius);
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={rating ? 'flex-start' : 'center'} sx={{padding: '0 1.5rem'}} gap={rating ? '' : 2} >
        <img src={imgSrc}  alt={title} width={'200px'} height={'200px'} style={{borderRadius:radius}} />
        <Typography variant='overline' sx={{fontWeight:subtitleboldFlag,color:'gray'}} >{subtitle}</Typography>
        <Typography variant={rating ?'caption' : 'subtitle1'} sx={{fontWeight:'bold'}} >{title}</Typography>
        <Typography variant='subtitle1' sx={{fontWeight:'bold'}} >{price}</Typography>
      { rating && <Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly size="small" />}
    </Box>
  )
}
