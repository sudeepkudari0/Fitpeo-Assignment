import { React } from "react";
import {
  Box,
  Heading,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import "@fontsource/open-sans/500.css";
import "@fontsource/raleway/400.css";
import {
  AiOutlineSearch,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineFileProtect,
} from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineCrisisAlert,
} from "react-icons/md";
import DashChartComponent from "./DashChartComponent";
import Products from "./Products";
const Dashboard = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        bg={"gray.100"}
        width={"100%"}
      >
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row", lg: "row", sm: "column" }}
        >
          <Heading
            margin={{ base: "20px", md: "0px", lg: "40px", sm: "20px" }}
            width={"250px"}
          >
            Hi, Sudeep 👋
          </Heading>
          <InputGroup
            margin={{ base: "20px", md: "0px", lg: "40px", sm: "20px" }}
            height={{ base: "40px", md: "40px", lg: "55px", sm: "40px" }}
            width={{ base: "400px", md: "300px", lg: "400px", sm: "400px" }}
            marginLeft={{ lg: "100rem" }}
          >
            <InputLeftElement pointerEvents="none">
              <Icon as={AiOutlineSearch} />
            </InputLeftElement>
            <Input type="text" placeholder="Search" />
          </InputGroup>
        </Box>
        <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}>
          <HStack
            marginLeft={{ lg: "80px" }}
            height={{ base: "260px", md: "260px", lg: "300px", sm: "260px" }}
            width={{ base: "402px", md: "400px", lg: "500px", sm: "402px" }}
            bg={"white"}
            borderRadius={"10px"}
            margin={{ base: "20px", md: "20px" }}
            padding={{ base: "20px", md: "20px" }}
          >
            <Icon
              as={GiMoneyStack}
              fontSize={"10rem"}
              color={"green.500"}
              bgGradient={"linear(to-l, #c0facf, #caedd3, #d1e6d6)"}
              margin={{ base: "20px", md: "20px" }}
              padding={{ base: "20px", md: "20px" }}
              borderRadius={"50%"}
            ></Icon>
            <VStack>
              <Text fontSize={"1.5rem"} fontWeight={"400"} color={"gray.500"}>
                Earning
              </Text>
              <Heading>$2000 </Heading>
              <VStack display={"flex"} flexDirection={"row"} padding={"2px"}>
                <Icon as={AiOutlineArrowUp} color={"green.600"}></Icon>
                <Text
                  color={"green.600"}
                  fontWeight={"800"}
                  fontFamily={"Open Sans"}
                  fontSize={"0.85rem"}
                >
                  37.8%
                </Text>
                <Text
                  fontWeight={"800"}
                  fontSize={"0.85rem"}
                  fontFamily={"Open Sans"}
                >
                  This month
                </Text>
              </VStack>
            </VStack>
          </HStack>
          <HStack
            marginLeft={{ lg: "60px" }}
            height={{ base: "260px", md: "260px", lg: "300px", sm: "260px" }}
            width={{ base: "402px", md: "400px", lg: "500px", sm: "402px" }}
            bg={"white"}
            borderRadius={"10px"}
            margin={{ base: "20px", md: "20px" }}
            padding={{ base: "20px", md: "20px" }}
          >
            <Icon
              as={AiOutlineFileProtect}
              fontSize={"10rem"}
              color={"#26edff"}
              bgGradient={"linear(to-l, #d9fcff, #c3e3e6, #baf0f5)"}
              margin={{ base: "20px", md: "20px" }}
              padding={{ base: "20px", md: "20px" }}
              borderRadius={"50%"}
            ></Icon>
            <VStack>
              <Text fontSize={"1.5rem"} fontWeight={"400"} color={"gray.500"}>
                Orders
              </Text>
              <Heading>1.4K </Heading>
              <VStack display={"flex"} flexDirection={"row"} padding={"2px"}>
                <Icon as={AiOutlineArrowDown} color={"red.600"}></Icon>
                <Text
                  color={"red.600"}
                  fontWeight={"800"}
                  fontFamily={"Open Sans"}
                  fontSize={"0.85rem"}
                >
                  2.7%
                </Text>
                <Text
                  fontWeight={"800"}
                  fontSize={"0.85rem"}
                  fontFamily={"Open Sans"}
                >
                  This month
                </Text>
              </VStack>
            </VStack>
          </HStack>

          <HStack
            marginLeft={{ lg: "60px" }}
            height={{ base: "260px", md: "260px", lg: "300px", sm: "260px" }}
            width={{ base: "402px", md: "400px", lg: "500px", sm: "402px" }}
            bg={"white"}
            borderRadius={"10px"}
            margin={{ base: "20px", md: "20px" }}
            padding={{ base: "20px", md: "20px" }}
          >
            <Icon
              as={MdOutlineAccountBalanceWallet}
              fontSize={"10rem"}
              color={"#9361ff"}
              bgGradient={"linear(to-l, #d8cbf2, #dfd2fc, #d1befa)"}
              margin={{ base: "20px", md: "20px" }}
              padding={{ base: "20px", md: "20px" }}
              borderRadius={"50%"}
            ></Icon>
            <VStack>
              <Text fontSize={"1.5rem"} fontWeight={"400"} color={"gray.500"}>
                Balance
              </Text>
              <Heading>$3.4K </Heading>
              <VStack display={"flex"} flexDirection={"row"} padding={"2px"}>
                <Icon as={AiOutlineArrowDown} color={"red.600"}></Icon>
                <Text
                  color={"red.600"}
                  fontWeight={"800"}
                  fontFamily={"Open Sans"}
                  fontSize={"0.85rem"}
                >
                  2.7%
                </Text>
                <Text
                  fontWeight={"800"}
                  fontSize={"0.85rem"}
                  fontFamily={"Open Sans"}
                >
                  This month
                </Text>
              </VStack>
            </VStack>
          </HStack>
          {/* 4th item */}
          <HStack
            bg={"white"}
            marginLeft={{ lg: "60px" }}
            height={{ base: "260px", md: "260px", lg: "300px", sm: "260px" }}
            width={{ base: "402px", md: "400px", lg: "500px", sm: "402px" }}
            borderRadius={"10px"}
            margin={{ base: "20px", md: "20px" }}
            padding={{ base: "20px", md: "20px" }}
          >
            <Icon
              as={MdOutlineCrisisAlert}
              fontSize={"10rem"}
              color={"#f0d229"}
              bgGradient={"linear(to-l, #fffade, #fcf5ca, #ded7ad)"}
              margin={{ base: "20px", md: "20px" }}
              padding={{ base: "20px", md: "20px" }}
              borderRadius={"50%"}
            ></Icon>
            <VStack>
              <Text fontSize={"1.5rem"} fontWeight={"400"} color={"gray.500"}>
                Total Sales
              </Text>
              <Heading>49K </Heading>
              <VStack display={"flex"} flexDirection={"row"} padding={"2px"}>
                <Icon as={AiOutlineArrowDown} color={"red.600"}></Icon>
                <Text
                  color={"red.600"}
                  fontWeight={"800"}
                  fontFamily={"Open Sans"}
                  fontSize={"0.85rem"}
                >
                  2.7%
                </Text>
                <Text
                  fontWeight={"800"}
                  fontSize={"0.85rem"}
                  fontFamily={"Open Sans"}
                >
                  This month
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </Box>
        <DashChartComponent />
        <Box
          bgColor={"white"}
          margin={"10px"}
          marginLeft={{ lg: "80px" }}
          borderRadius={"10px"}
        >
          <Products />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
