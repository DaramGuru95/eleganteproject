import { Box, Typography } from '@mui/material'
import React from 'react'
import { discountText } from './discountText'

export default function Discount() {
  return (
    <Box width={'100%'} sx={{backgroundColor:'#E03c31'}} display={'flex'} alignItems={'center'} height={'5vh'}>
        <marquee width="100%" direction="left">
            <Box display={'flex'} gap={6} alignItems={'center'}>

            <Typography variant='subtitle2' sx={{color:'#fff',opacity:0.5}} >{discountText}</Typography>
            <Typography variant='subtitle2' sx={{color:'#fff',opacity:0.5}} >{discountText}</Typography>
            <Typography variant='subtitle2' sx={{color:'#fff',opacity:0.5}} >{discountText}</Typography>
            </Box>
        </marquee>

    </Box>
  )
}
