import { Box } from '@mui/material'
import React from 'react'

import HariProductCard from './Card';

export default function ProductComponent({data,flexbasis,imgHeight,imgWidth,gap}) {
  return (
    <Box display={'flex'} width={'100%'} overflow={'hidden'} marginTop={15} alignItems={'center'} justifyContent={'center'}>

        {
            data.map(product=><Box flexBasis={flexbasis} key={product.id} marginX={4}><HariProductCard gap={gap}  imgHeight={imgHeight} imgWidth={imgWidth} imgSrc={product.imgSrc} title={product.title} subtitle={product.subtitle} /> </Box>)
        }
    </Box>
  )
}
