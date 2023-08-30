import { Box, Typography } from '@mui/material'
import React from 'react'
import { navlinks } from './navlinks'

export default function TopNavigation() {
  return (
    <Box width={'100%'} sx={{ backgroundColor: '#101820' }}  >
      <Box
        padding={'0 15%'}
        display={'flex'}
        flexWrap={'wrap'}
        justifyContent={['center', 'space-around']}
        alignItems="center"
      >
        {
          navlinks?.map(navlink => <Typography variant='overline' key={navlink.id}
            color={'#fff'}
          >{navlink.link}</Typography>)
        }
      </Box>
    </Box>
  )
}
