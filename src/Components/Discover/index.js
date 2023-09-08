import { Box } from "@mui/material";
import React from "react";
import CardCarsoul from "./CardCarsoul";
import DiscoverNav from "./DiscoverNav";


// import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { specialOfferData, trendingNavData, weekOfferData } from "./data";
import { cardData } from "../Trending/cardData";
import { productData } from "../HairproductShop/data";

export default function CarousalComponent({ header, navflag, data }) {


  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      marginTop={10}
      width={"100%"}
      height={navflag ?"60vh" : '80vh'}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={'center'}
    >
     
        <DiscoverNav header={header} navflag={navflag}   />

    
{
   navflag ?    <TabContext value={value}
  
   >
          <Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="#101820" indicatorColor="#000"
            //  variant="scrollable"
             scrollButtons='auto'
             allowScrollButtonsMobile
              TabIndicatorProps={{
                style: {
                  '.Mui-selected': {
                    fontWeight: 'bold',
                  },
                  border: 'none',
      height: '5px',
      width:'40px',
     
      background: 'transparent',
      backgroundImage: 'linear-gradient(25deg, transparent 33%, #FFAA4D 33%, #FFAA4D 66%, transparent 66%)',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-x',
      backgroundSize: '5px 4px',
      margin:'auto'
                }

              }}
              centered sx={{ boxShadow: '0 4px 0 -2px white',backgroundColor:'#1018200D' }}  >
              <Tab label="Special Offers" value="1" />
              <Tab label="Trending" value="2" />
              <Tab label="New In" value="3" />
            </TabList>

          </Box>
          <TabPanel value="1" sx={{margin:0,padding:0}}>
            <Box width={'100%'} height={'15vh'} sx={{backgroundColor:'#1018200D'}} position={'absolute'}  />

          

            <Box
              width={"100%"}
              height={"40vh"}
              position={'relative'}
              sx={{top:25}}

            >
              <CardCarsoul data={specialOfferData} radius={undefined}  carousalButtonsControlFlag={true} />
            </Box>
          </TabPanel>
          <TabPanel value="2" sx={{margin:0,padding:0}}>
          <Box width={'100%'} height={'15vh'} sx={{backgroundColor:'#1018200D'}} position={'absolute'}  />

            <Box
             position={'relative'}
             sx={{top:25}}
              width={"100%"}
              height={"40vh"}
            >
              <CardCarsoul data={trendingNavData} radius={undefined}  carousalButtonsControlFlag={true} />
            </Box>
          </TabPanel>
          <TabPanel value="3" sx={{margin:0,padding:0}}>
          <Box width={'100%'} height={'15vh'} sx={{backgroundColor:'#1018200D'}} position={'absolute'}  />

            <Box
              width={"100%"}
              height={"40vh"}
              position={'relative'}
              sx={{top:25}}
            >
              <CardCarsoul data={weekOfferData}  radius={undefined}  carousalButtonsControlFlag={true}/>
            </Box>

          </TabPanel>
        </TabContext>  : 
        <>
        

<Box
  width={"100%"}
  height={"40vh"}
  position={'relative'}
  sx={{top:-75}}
>
<CardCarsoul data={data}  radius={undefined}  carousalButtonsControlFlag={true}  />
</Box>
        </>
       }
        </Box>


  );
}
