import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ToggleColorMode from "../../Themes/ToggleColorMode";

const BaseLayout = (props) => {
  return (
    <Box
      w="100%"
      h="100vh"
      display={"grid"}
      gridTemplateColumns={{ base: "1fr", md: "1fr", lg: ".2fr 1fr" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        w={{ base: "100%", md: "100%", lg: "250px" }}
        h={{ base: "auto", md: "auto", lg: "100vh" }}
        
      >
        <Sidebar />
        <ToggleColorMode />
      </Box>
      <Box w="100%" h="auto">
        {props.children}
      </Box>
    </Box>
  );
};

export default BaseLayout;
