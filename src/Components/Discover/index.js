import { Box } from "@mui/material";
import React from "react";
import CardCarsoul from "./CardCarsoul";
import DiscoverNav from "./DiscoverNav";


// import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { specialOfferData } from "./data";
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
      height={"60vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={'center'}
    >
     
        <DiscoverNav header={header} navflag={navflag}   />

    
{
   navflag ?    <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="#101820"
              TabIndicatorProps={{
                style: {
                  background: '#FFAA4D 0% 0% no-repeat padding-box',
                  border: '1px solid #FFAA4D',
                  opacity: 1,
                }
              }}
              centered sx={{ boxShadow: '0 4px 0 -2px white',backgroundColor:'#1018200D' }}  >
              <Tab label="Special Offers" value="1" />
              <Tab label="Trending" value="2" />
              <Tab label="New In" value="3" />
            </TabList>

          </Box>
          <TabPanel value="1">

            <Box
              width={"100%"}
              height={"40vh"}
            >
              <CardCarsoul data={specialOfferData} radius={undefined}  carousalButtonsControlFlag={true} />
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box
             
              width={"100%"}
              height={"40vh"}
            >
              <CardCarsoul data={cardData} radius={undefined}  carousalButtonsControlFlag={true} />
            </Box>
          </TabPanel>
          <TabPanel value="3">
            <Box
              width={"100%"}
              height={"40vh"}
              
            >
              <CardCarsoul data={productData}  radius={undefined}  carousalButtonsControlFlag={true}/>
            </Box>

          </TabPanel>
        </TabContext>  : <CardCarsoul data={specialOfferData}  radius={undefined}  carousalButtonsControlFlag={true}  />}
        </Box>


  );
}
