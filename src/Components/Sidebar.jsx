import { BrowserRouter, Link } from "react-router-dom";
import React from "react";
import { Box, Heading, Icon, List, ListItem } from "@chakra-ui/react";
import "@fontsource/open-sans/500.css";
import "@fontsource/raleway/400.css";
import { TbSettings2 } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import {
  BiBriefcase,
  BiCycling,
  BiMoneyWithdraw,
  BiBadgeCheck,
  BiHelpCircle,
} from "react-icons/bi";
import User from "../Components/User";

const Sidebar = () => {
  const listStyle = {
    fontSize: "1.2rem",
    width: "auto",
    padding: "10px",
    color: "white",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#3b3b5c",
      cursor: "pointer",
    },
  };

  return (
    <div>
      <Box
        width={{ md: "100%", lg: "100%", sm: "100%" }}
        height={{ md: "100vh", lg: "100vh", sm: "auto" }}
        backgroundColor={"#291e57"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box display={"flex"} justifyContent={"center"} padding={"10px"}>
          <Icon
            as={TbSettings2}
            marginTop={"15px"}
            fontSize="2.5rem"
            color="white"
          />
          <Heading
            fontSize={{ base: "2rem", md: "20px", lg: "40px", sm: "60px" }}
            padding={"10px"}
            textAlign={"center"}
            color={"white"}
            fontWeight={"500"}
          >
            Dashboard
          </Heading>
        </Box>
        <Box>
          <List
            padding={"10px"}
            spacing={4}
            marginLeft={{ base: "0px", md: "10px", lg: "0px", sm: "150px" }}
            marginTop={"10px"}
            fontSize={"1.5rem"}
            fontWeight={"400"}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box display={"flex"} sx={listStyle}>
                <Icon as={BiBriefcase} fontSize="1.6rem" color="white" />
                <ListItem marginLeft={"10px"}>Dashboard</ListItem>
              </Box>
            </Link>
            <Box display={"flex"} sx={listStyle}>
              <Icon as={BiCycling} fontSize="1.6rem" color="white" />
              <Link to="/productS" style={{ textDecoration: "none" }}>
                <ListItem marginLeft={"10px"}>Product</ListItem>
              </Link>
              <Link to="/productS" style={{ textDecoration: "none" }}>
                <Icon
                  as={IoIosArrowForward}
                  fontSize="1.5rem"
                  color="white"
                  marginLeft={{
                    base: "255px",
                    md: "60px",
                    lg: "268px",
                    sm: "300px",
                  }}
                  marginTop={"5px"}
                />
              </Link>
            </Box>
            <Box display={"flex"} sx={listStyle}>
              <Icon as={AiOutlineUser} fontSize="1.6rem" color="white" />
              <Link to="/customers" style={{ textDecoration: "none" }}>
                <ListItem marginLeft={"10px"}>Customers</ListItem>
              </Link>
              <Link to="/customers" style={{ textDecoration: "none" }}>
                <Icon
                  as={IoIosArrowForward}
                  fontSize="1.5rem"
                  color="white"
                  marginLeft={{
                    base: "230px",
                    md: "60px",
                    lg: "240px",
                    sm: "300px",
                  }}
                  marginTop={"4px"}
                />
              </Link>
            </Box>
            <Box display={"flex"} sx={listStyle}>
              <Icon as={BiMoneyWithdraw} fontSize="1.6rem" color="white" />
              <Link to="/income" style={{ textDecoration: "none" }}>
                <ListItem marginLeft={"10px"}>Income</ListItem>
              </Link>
              <Link to="/income" style={{ textDecoration: "none" }}>
                <Icon
                  as={IoIosArrowForward}
                  fontSize="1.5rem"
                  color="white"
                  marginLeft={{
                    base: "260px",
                    md: "60px",
                    lg: "268px",
                    sm: "300px",
                  }}
                  marginTop={"4px"}
                />
              </Link>
            </Box>
            <Box display={"flex"} sx={listStyle}>
              <Icon as={BiBadgeCheck} fontSize="1.6rem" color="white" />
              <Link to="/promote" style={{ textDecoration: "none" }}>
                <ListItem marginLeft={"10px"}>Promote</ListItem>
              </Link>
              <Link to="/promote" style={{ textDecoration: "none" }}>
                <Icon
                  as={IoIosArrowForward}
                  fontSize="1.5rem"
                  color="white"
                  marginLeft={{
                    base: "250px",
                    md: "60px",
                    lg: "256px",
                    sm: "300px",
                  }}
                  marginTop={"3px"}
                />
              </Link>
            </Box>

            <Box display={"flex"} sx={listStyle}>
              <Icon as={BiHelpCircle} fontSize="1.6rem" color="white" />
              <Link to="/promote" style={{ textDecoration: "none" }}>
                <ListItem marginLeft={"10px"}>Help</ListItem>
              </Link>
              <Link to="/promote" style={{ textDecoration: "none" }}>
                <Icon
                  as={IoIosArrowForward}
                  fontSize="1.5rem"
                  color="white"
                  marginLeft={{
                    base: "285px",
                    md: "60px",
                    lg: "290px",
                    sm: "300px",
                  }}
                  marginTop={"3px"}
                />
              </Link>
            </Box>
          </List>
        </Box>
      </Box>
      {/* <User /> */}
    </div>
  );
};

export default Sidebar;
