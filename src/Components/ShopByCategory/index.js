import { Box } from '@mui/material'
import React from 'react'
import CarousalControl from './CarousalControl'
import CardCarsoul from '../Discover/CardCarsoul';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Shop({ data, flexdirection, title, subtitle, buttontext, subtitleboldFlag, controlsflexDirection, controlsjustifyContent, radius }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box display={'flex'} flexDirection={flexdirection} marginTop={15} gap={4}>
      <CarousalControl matches={matches} title={title} subtitle={subtitle} buttontext={buttontext} controlsflexDirection={controlsflexDirection} controlsjustifyContent={controlsjustifyContent} subtitleboldFlag={subtitleboldFlag} carousalButtonsControlFlag={false} />
      <CardCarsoul data={data} radius={radius} carousalButtonsControlFlag={ !matches} />
    </Box>
  )
}
