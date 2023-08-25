import { Box } from "@mui/material";
import React from "react";
import CardCarsoul from "./CardCarsoul";
import DiscoverNav from "./DiscoverNav";

export default function CarousalComponent({header,navflag,data}) {
  return (
    <Box
    marginTop={10}
    //   width={"100%"}
    //   height={"60vh"}
    //   display={"flex"}
    //   flexDirection={"column"}
    >
      <Box sx={{ position: "absolute" }} width={'100%'} height={'150vh'}>
        <DiscoverNav header={header} navflag={navflag}  />
      </Box>
      <Box
        sx={{ position: "relative", top: 100, overflow: "hidden" }}
        width={"100%"}
        height={"40vh"}
      >
        <CardCarsoul data={data} />
      </Box>
    </Box>
  );
}
