import React from "react";
import "./SidebarStyle.scss";
import { Box, Icon, Text } from "@chakra-ui/react";
import { IoIosHome } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import { TfiBookmarkAlt } from "react-icons/tfi";
import { TfiLayoutMediaLeftAlt } from "react-icons/tfi";
import { MdOutlineContacts } from "react-icons/md";
import { LiaMapMarkedSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { ImPinterest2 } from "react-icons/im";
import { IoMdContact } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

const Sidebar = () => {
  const [ulToggle, setUlToggle] = useState("ulToggle");

  const menuToggle = () => {
    if (ulToggle == "ulToggle") {
      setUlToggle("ulToggleActive ulToggle");
    } else {
      setUlToggle("ulToggle");
    }
  };

  return (
    <Box
      display={{ base: "flex", lg: "grid" }}
      gridTemplateColumns={{
        base: "1fr 1fr",
        md: "1fr 1fr",
        lg: "1fr",
      }}
      gridTemplateRows={{ base: "1fr", md: "1fr", lg: "1fr 1fr .3fr" }}
      position={"fixed"}
      justifyContent={{ base: "space-between", lg: "center" }}
      alignItems={"center"}
      // left={{base:'-100%', md:'-100%', lg:'0'}}
      left={"0"}
      top={"0"}
      bg="rgba(0, 0, 0, 0.1)"
      w={{ base: "100%", md: "100%", lg: "250px" }}
      h={{ base: "auto", md: "auto", lg: "100vh" }}
      textAlign={"center"}
      p={{ base: "1rem 1rem", md: "1rem 2rem", lg: "0" }}
    >
      <Box
        justifySelf={"center"}
        display={"flex"}
        flexDirection={{ base: "row", md: "row", lg: "column" }}
      >
        <Box
          p="2rem"
          w="10rem"
          h="10rem"
          borderRadius={"100%"}
          bg="grey"
          display={{ base: "none", md: "none", lg: "flex" }}
          justifyContent={"center"}
          // display={{ base: "0", md: "none", lg: "1" }}
          alignItems={"center"}
        >
          <Icon as={IoMdContact} w="10rem" h={"10rem"} />
        </Box>
        <Text mt="1rem" className="Name">
          Edison Jonathan
        </Text>
      </Box>
      <Box
        className={ulToggle}
        as="ul"
        justifySelf={"center"}
        listStyleType={"none"}
        display={"flex"}
        position={{ base: "absolute", md: "absolute", lg: "relative" }}
        flexDirection={{ base: "column", md: "column", lg: "column" }}
        rowGap={{ base: "1.5rem", lg: "1.5rem" }}
        w={{ base: "100%", md: "", lg: "" }}
        mt={{ base: "38rem", lg: "0" }}
        // left={{ base: "-1000px", lg: "0" }}
      >
        <Link to={"#home"}>
          <Text
            as="li"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            columnGap={".5rem"}
            p={{ base: ".6rem 0", lg: "0" }}
          >
            <Icon as={IoIosHome} />
            Home
          </Text>
        </Link>

        <Link to={"#about"}>
          <Text
            as="li"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            columnGap={".5rem"}
            p={{ base: ".6rem 0", lg: "0" }}
          >
            <Icon as={MdOutlineContacts} />
            About Me
          </Text>
        </Link>
        <Link to={"#services"}>
          <Text
            as="li"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            columnGap={".5rem"}
            p={{ base: ".6rem 0", lg: "0" }}
          >
            <Icon as={GiSettingsKnobs} />
            Services
          </Text>
        </Link>
        <Link to={""}>
          <Text
            as="li"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            columnGap={".5rem"}
            p={{ base: ".6rem 0", lg: "0" }}
          >
            <Icon as={TfiBookmarkAlt} />
            Portfolio
          </Text>
        </Link>
        <Link to={""}>
          <Text
            as="li"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            columnGap={".5rem"}
            p={{ base: ".6rem 0", lg: "0" }}
          >
            <Icon as={TfiLayoutMediaLeftAlt} />
            Blogs
          </Text>
        </Link>
        <Link to={""}>
          <Text
            as="li"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            columnGap={".5rem"}
            p={{ base: ".6rem 0", lg: "0" }}
          >
            <Icon as={LiaMapMarkedSolid} />
            Contact Me
          </Text>
        </Link>
      </Box>
      <Box
        display={"flex"}
        columnGap={"1rem"}
        justifySelf={"center"}
        alignItems={"center"}
      >
        <Icon as={FaFacebookF} />
        <Icon as={AiOutlineTwitter} />
        <Icon as={BsInstagram} />
        <Icon as={GrLinkedinOption} />
        <Icon as={ImPinterest2} />
        <Icon
          as={CiMenuFries}
          fontSize={"2rem"}
          ml="1rem"
          cursor={"pointer"}
          display={{ base: "block", md: "block", lg: "none" }}
          onClick={menuToggle}
          // onClick={() => {
          //   if (ulLeft == '-1000px')
          //     changeUlLeft("0")
          //   else
          //     changeUlLeft("-1000px");
          // }}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
