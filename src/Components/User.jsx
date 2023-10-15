import React from "react";
import {
  Box,
  HStack,
  Text,
  VStack,
  Avatar,
  Heading,
  Textarea,
  Icon,
} from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const User = () => {
  const listStyle2 = {
    backgroundColor: "#3b3b5c",
  };
  return (
    <div>
      <Box display={"flex"} justifyContent={"center"} margin={{ base: "10px" }}>
        <HStack
          sx={listStyle2}
          width={{ base: "100%", md: "100%", lg: "100%", sm: "0%" }}
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
    </div>
  );
};
export default User;
