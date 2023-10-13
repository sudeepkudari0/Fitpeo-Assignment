import React from "react";
import {
  Box,
  Heading,
  Icon,
  List,
  ListItem,
  Avatar,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "@fontsource/open-sans/500.css";
import "@fontsource/raleway/400.css";
import { TbSettings2 } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import {
  BiBriefcase,
  BiCycling,
  BiMoneyWithdraw,
  BiBadgeCheck,
  BiHelpCircle,
} from "react-icons/bi";

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

  const listStyle2 = {
    backgroundColor: "#3b3b5c",
  };
  return (
    <div>
      <Box
        width={{ md: "100%", lg: "15%", sm: "100%" }}
        height={"100vh"}
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

        <List
          padding={"10px"}
          spacing={4}
          marginLeft={{ base: "0px", md: "10px", lg: "0px", sm: "150px" }}
          marginTop={"10px"}
          fontSize={"1.5rem"}
          fontWeight={"400"}
        >
          <Box display={"flex"} sx={listStyle}>
            <Icon as={BiBriefcase} fontSize="1.6rem" color="white" />
            <ListItem marginLeft={"10px"}>Dashboard</ListItem>
          </Box>
          <Box display={"flex"} sx={listStyle}>
            <Icon as={BiCycling} fontSize="1.6rem" color="white" />
            <ListItem marginLeft={"10px"}>Product</ListItem>
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
          </Box>
          <Box display={"flex"} sx={listStyle}>
            <Icon as={AiOutlineUser} fontSize="1.6rem" color="white" />
            <ListItem marginLeft={"10px"}>Customers</ListItem>
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
          </Box>
          <Box display={"flex"} sx={listStyle}>
            <Icon as={BiMoneyWithdraw} fontSize="1.6rem" color="white" />
            <ListItem marginLeft={"10px"}>Income</ListItem>
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
          </Box>
          <Box display={"flex"} sx={listStyle}>
            <Icon as={BiBadgeCheck} fontSize="1.6rem" color="white" />
            <ListItem marginLeft={"10px"}>Promote</ListItem>
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
          </Box>
          <Box display={"flex"} sx={listStyle}>
            <Icon as={BiHelpCircle} fontSize="1.6rem" color="white" />
            <ListItem marginLeft={"10px"}>Help</ListItem>
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
          </Box>
        </List>
        <Box display={"flex"}>
          <HStack
            sx={listStyle2}
            width={{ base: "100%", md: "100%", lg: "100%", sm: "100%" }}
            padding={"10px"}
            borderRadius={"15px"}
            marginTop={{ base: "280px", md: "600px", lg: "850px", sm: "300px" }}
          >
            <Avatar
              size="lg"
              name="S K"
              marginLeft={"25px"}
              src="/src/assests/avatar.jpg"
            />
            <VStack>
              <Heading
                minWidth={"200px"}
                fontSize={"1.2rem"}
                marginLeft={"0px"}
                textAlign={"center"}
                color={"white"}
              >
                Sudeep Kudari
              </Heading>
              <Text marginLeft={"0px"} color={"white"} fontSize={"0.8rem"}>
                Frontend Developer
              </Text>
            </VStack>
            <Icon
              as={IoIosArrowDown}
              color={"white"}
              fontSize={"1.5rem"}
              marginLeft={"50px"}
            />
          </HStack>
        </Box>
      </Box>
    </div>
  );
};

export default Sidebar;
