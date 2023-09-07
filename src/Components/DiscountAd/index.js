import { Box, Typography } from '@mui/material'
import React from 'react'
import { discountText } from './discountText'

export default function Discount() {
  return (
    <Box width={'100%'} sx={{backgroundColor:'#E03c31'}} display={'flex'} alignItems={'center'}>
        <marquee width="100%" direction="left">
            <Box display={'flex'} gap={6} alignItems={'center'}>

            <Typography variant='caption' sx={{color:'#fff'}} >{discountText}</Typography>
            <Typography variant='caption' sx={{color:'#fff'}} >{discountText}</Typography>
            <Typography variant='caption' sx={{color:'#fff'}} >{discountText}</Typography>
            </Box>
        </marquee>

    </Box>
  )
}
