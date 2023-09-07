import React from 'react'
import { Box, Typography } from '@mui/material'
import TrendingCards from './TrendingCards'

export default function Trending() {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} margin={3} gap={3} paddingTop={{xl:12,lg:12}}>
        <Typography variant='h6' sx={{fontWeight:'bold'}}>TRENDING NOW</Typography>
        <TrendingCards/>

    </Box>
  )
}
