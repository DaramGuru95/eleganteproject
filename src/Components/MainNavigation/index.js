import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { topnavlinks } from "../Header/topnavlinks";

export default function MainNavigation() {
  return (
    <Box
      display={"flex"}
      marginLeft={18}
      padding={4}
      justifyContent={"space-around"}
    >
      {topnavlinks.map((navlink) => (
        <Typography
          key={navlink.id}
          variant="subtitle2"
          component={Link}
          sx={{
            color: '#101820',
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          {navlink.link}
        </Typography>
      ))}
    </Box>
  );
}
