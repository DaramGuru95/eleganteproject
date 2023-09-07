import { Box } from '@mui/material'
import React from 'react'

import HariProductCard from './Card';

export default function ProductComponent({data,flexbasis,imgHeight,imgWidth,gap}) {
  return (
    <Box display={'flex'} width={'100%'}  marginTop={15}  alignItems={'center'} justifyContent={'center'} flexDirection={{xs:'column',md:'row'}} gap={2}>

        {
            data.map(product=><Box flexBasis={flexbasis} key={product.id}><HariProductCard gap={gap}  imgHeight={imgHeight} imgWidth={imgWidth} imgSrc={product.imgSrc} title={product.title} subtitle={product.subtitle} /> </Box>)
        }
    </Box>
  )
}
