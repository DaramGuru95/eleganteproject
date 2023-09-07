import { Box, Divider, ThemeProvider } from "@mui/material";
import TopNavigation from "./Components/TopNavigation";
import Header from "./Components/Header";
import MainNavigation from "./Components/MainNavigation";
import Discount from "./Components/DiscountAd";
import Banner from "./Components/Banner";
import Trending from "./Components/Trending";
import ProductComponent from "./Components/HairproductShop";
import CarousalComponent from "./Components/Discover";
import Shop from "./Components/ShopByCategory";
import {
  hairProductData,
  infraData,
  productData,
} from "./Components/HairproductShop/data";
import { specialOfferData, weekOfferData } from "./Components/Discover/data";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import CollectionBanner from "./Components/Banner2";
import { shopBy } from "./Components/ShopByCategory/ShopByCatData";
import Latest from "./Components/Latest";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    // <ThemeProvider theme={theme}>
    <Box width={'100%'} >
      <TopNavigation />
      <Header />
     {matches && <MainNavigation />}
      <Discount />
      <Banner />
      <Trending />
      <CarousalComponent
        header={"Discover"}
        navflag={true}
        data={specialOfferData}
      />

    
      <ProductComponent
        data={hairProductData}
      />
     
      <Shop
        flexdirection={"column"}
        data={shopBy}
        title={"SHOP BY CATEGORY"}
        subtitle={""}
        buttontext={"Shop Now"}
        controlsflexDirection={"row"}
        controlsjustifyContent={"space-between"}
        radius={'50%'}
      />
      <ProductComponent
        data={productData}
        flexbasis={"28%"}
        imgWidth={"300px"}
        imgHeight={"450px"}
        gap={1}
      />
      <CarousalComponent
        header={"OFFERS OF THE WEEK"}
        navflag={false}
        data={weekOfferData}
      />
      <CollectionBanner />
      <ProductComponent
        data={infraData}
        flexbasis={""}
        imgWidth={"300px"}
        imgHeight={"300px"}
        gap={1}
      />
     <Latest />
      <Divider sx={{margin:5,color:'#A0A0A076'}}  />
      <Box marginX={5}>
      <Contact/>

      </Box>
      <Footer/>
    {/* // </ThemeProvider> */}
    </Box>
  );
}

export default App;
