import {
  Grid,
  Box,
  GridItem,
  Heading,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Divider,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlineSearch } from "react-icons/ai";
import React from "react";

const Products = () => {
  return (
    <>
      <Box>
        <Box width={"100%"}>
          <Grid
            h={"160px"}
            w={"100%"}
            minW={"100%"}
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(10, 1fr)"
          >
            <GridItem
              colSpan={7}
              rowSpan={1}
              width={{ base: "auto", md: "1695px" }}
            >
              <Heading margin={"20px"}>Products</Heading>
            </GridItem>
            <GridItem colSpan={2} rowSpan={1} width={"100%"}>
              <InputGroup margin={"20px"}>
                <InputLeftElement pointerEvents="none">
                  <Icon as={AiOutlineSearch} />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Search"
                  width={{
                    base: "300px",
                    md: "auto",
                    lg: "auto",
                    sm: "100px",
                  }}
                />
              </InputGroup>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1} width={"100%"}>
              <Menu>
                <MenuButton
                  display={{ base: "none", md: "block" }}
                  marginLeft={"40px"}
                  marginTop={"20px"}
                  width={"auto"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  <label>Last 30 days</label>
                </MenuButton>
                <MenuList>
                  <MenuItem>Last 30 days</MenuItem>
                  <MenuItem>Last 3 months</MenuItem>
                  <MenuItem>Last 6 months</MenuItem>
                  <MenuItem>Last year</MenuItem>
                </MenuList>
              </Menu>
            </GridItem>
            <GridItem colSpan={7} rowSpan={1} width={"auto"}>
              <Text
                margin={"20px"}
                marginLeft={{ base: "10px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                Product Name
              </Text>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1} width={"100%"}>
              <Text
                margin={"20px"}
                marginLeft={{ lg: "-80px", md: "-80px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                Stock
              </Text>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1} width={"100%"}>
              <Text
                margin={"20px"}
                marginLeft={{ lg: "-55px", md: "-55px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                Price
              </Text>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1} width={"100%"}>
              <Text
                margin={"20px"}
                marginLeft={{ lg: "-68px", md: "-68px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                Total Sales
              </Text>
            </GridItem>
          </Grid>
          <Divider borderColor="gray.300" />
          <Grid
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(10, 1fr)"
            gap={0}
            height={"50vh"}
          >
            <GridItem colSpan={7} rowSpan={1} width={"100%"}>
              <HStack width={"auto"}>
                <Image
                  width={{
                    base: "70px",
                    md: "150px",
                    lg: "170px",
                    sm: "70px",
                  }}
                  objectFit="cover"
                  src="/assests/p1.jpeg"
                  borderRadius={"10px"}
                  margin={"20px"}
                  marginRight={"2px"}
                />
                <VStack>
                  <Heading fontSize={{ base: "1rem", md: "1.8rem" }}>
                    Nature 3D
                  </Heading>
                  <Text fontSize={{ base: "0.85rem", md: "1.5rem" }}>
                    3D Printer
                  </Text>
                </VStack>
              </HStack>
            </GridItem>
            <GridItem colSpan={1}>
              <Text
                margin={"20px"}
                marginLeft={{ base: "-55px", md: "22px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                20
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text
                margin={"20px"}
                marginLeft={{ base: "-20px", md: "22px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                32
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text margin={"20px"} fontSize={{ base: "18px", md: "25px" }}>
                3
              </Text>
            </GridItem>

            <GridItem colSpan={7} rowSpan={1} width={"100%"}>
              <HStack width={"auto"}>
                <Image
                  width={{
                    base: "70px",
                    md: "150px",
                    lg: "170px",
                    sm: "70px",
                  }}
                  objectFit="cover"
                  src="/assests/p3.jpeg"
                  borderRadius={"10px"}
                  margin={"20px"}
                  marginRight={"2px"}
                />
                <VStack>
                  <Heading fontSize={{ base: "1rem", md: "1.8rem" }}>
                    Mountains
                  </Heading>
                  <Text fontSize={{ base: "0.85rem", md: "1.5rem" }}>
                    3D Mountains
                  </Text>
                </VStack>
              </HStack>
            </GridItem>
            <GridItem colSpan={1}>
              <Text
                margin={"20px"}
                marginLeft={{ base: "-50px", md: "22px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                6
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text
                margin={"20px"}
                marginLeft={{ base: "-20px", md: "22px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                86
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text margin={"20px"} fontSize={{ base: "18px", md: "25px" }}>
                12
              </Text>
            </GridItem>
            <GridItem colSpan={7} rowSpan={1} width={"100%"}>
              <HStack width={"auto"}>
                <Image
                  width={{
                    base: "70px",
                    md: "150px",
                    lg: "170px",
                    sm: "70px",
                  }}
                  objectFit="cover"
                  src="/assests/p4.jpeg"
                  margin={"20px"}
                  marginRight={"2px"}
                  borderRadius={"10px"}
                />
                <VStack>
                  <Heading fontSize={{ base: "1rem", md: "1.8rem" }}>
                    Spring Season
                  </Heading>
                  <Text fontSize={{ base: "0.85rem", md: "1.5rem" }}>
                    Essense
                  </Text>
                </VStack>
              </HStack>
            </GridItem>
            <GridItem colSpan={1}>
              <Text
                margin={"20px"}
                marginLeft={{ base: "-50px", md: "22px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                23
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text
                margin={"20px"}
                marginLeft={{ base: "-20px", md: "22px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                25
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text margin={"20px"} fontSize={{ base: "18px", md: "25px" }}>
                56
              </Text>
            </GridItem>
            <GridItem colSpan={7} rowSpan={1} width={"100%"}>
              <HStack width={"auto"}>
                <Image
                  width={{
                    base: "70px",
                    md: "150px",
                    lg: "170px",
                    sm: "70px",
                  }}
                  objectFit="cover"
                  src="/assests/p5.jpeg"
                  margin={"20px"}
                  marginRight={"2px"}
                  borderRadius={"10px"}
                />
                <VStack>
                  <Heading fontSize={{ base: "1rem", md: "1.8rem" }}>
                    Green Forest
                  </Heading>
                  <Text fontSize={{ base: "0.85rem", md: "1.5rem" }}>
                    Fresh Air
                  </Text>
                </VStack>
              </HStack>
            </GridItem>
            <GridItem colSpan={1}>
              <Text
                margin={"20px"}
                marginLeft={{ base: "-50px", md: "22px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                5
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text
                margin={"20px"}
                marginLeft={{ base: "-20px", md: "22px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                12
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text margin={"20px"} fontSize={{ base: "18px", md: "25px" }}>
                56
              </Text>
            </GridItem>
            <GridItem colSpan={7} rowSpan={1} width={"100%"}>
              <HStack width={"auto"}>
                <Image
                  width={{
                    base: "70px",
                    md: "150px",
                    lg: "170px",
                    sm: "70px",
                  }}
                  objectFit="cover"
                  src="/assests/p6.jpeg"
                  margin={"20px"}
                  marginRight={"2px"}
                  borderRadius={"10px"}
                />
                <VStack>
                  <Heading fontSize={{ base: "1rem", md: "1.8rem" }}>
                    Cosmos
                  </Heading>
                  <Text fontSize={{ base: "0.85rem", md: "1.5rem" }}>
                    0 Gravity
                  </Text>
                </VStack>
              </HStack>
            </GridItem>
            <GridItem colSpan={1}>
              <Text
                margin={"20px"}
                marginLeft={{ base: "-50px", md: "22px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                9
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text
                margin={"20px"}
                marginLeft={{ base: "-23px", md: "22px" }}
                fontSize={{ base: "18px", md: "25px" }}
              >
                23
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text margin={"20px"} fontSize={{ base: "18px", md: "25px" }}>
                0
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Products;
