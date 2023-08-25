import { Box, Divider, ThemeProvider } from "@mui/material";
import theme from "./Theme";
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
import { specialOfferData } from "./Components/Discover/data";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopNavigation />
      <Header />
      <MainNavigation />
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
        flexbasis={"50%"}
        imgWidth={"650px"}
        imgHeight={"350px"}
        gap={1}
      />
      <Shop
        flexdirection={"column"}
        data={specialOfferData}
        title={"SHOP BY CATEGORY"}
        subtitle={""}
        buttontext={"Shop Now"}
        controlsflexDirection={"row"}
        controlsjustifyContent={"space-between"}
        raduis={'50%'}
      />
      <ProductComponent
        data={productData}
        flexbasis={""}
        imgWidth={"300px"}
        imgHeight={"450px"}
        gap={1}
      />
      <CarousalComponent
        header={"OFFERS OF THE WEEK"}
        navflag={false}
        data={specialOfferData}
      />
      <ProductComponent
        data={infraData}
        flexbasis={""}
        imgWidth={"300px"}
        imgHeight={"300px"}
        gap={1}
      />
      <Box sx={{ overflow: "hidden" }}>
        <Shop
          flexdirection={"row"}
          data={specialOfferData}
          title={"LATEST"}
          subtitle={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
          }
          buttontext={"View All"}
          subtitleboldFlag={""}
          controlsflexDirection={"column"}
          controlsjustifyContent={"space-between"}
          radius={''}
        />
      </Box>
      <Divider sx={{margin:5,color:'#A0A0A076'}}  />
      <Box marginX={5}>
      <Contact/>

      </Box>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
