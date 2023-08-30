import { Box } from '@mui/material'
import React from 'react'
import CarousalControl from './CarousalControl'
import CardCarsoul from '../Discover/CardCarsoul'

export default function Shop({ data, flexdirection, title, subtitle, buttontext, subtitleboldFlag, controlsflexDirection, controlsjustifyContent, radius }) {
  console.log(radius);
  return (
    <Box display={'flex'} flexDirection={flexdirection} marginTop={15} gap={4}>
      <CarousalControl title={title} subtitle={subtitle} buttontext={buttontext} controlsflexDirection={controlsflexDirection} controlsjustifyContent={controlsjustifyContent} subtitleboldFlag={subtitleboldFlag} />
      <CardCarsoul data={data} radius={radius} carousalButtonsControlFlag={false} />
    </Box>
  )
}
