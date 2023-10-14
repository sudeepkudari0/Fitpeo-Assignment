import { React, useState, useCallback } from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
} from "@chakra-ui/react";
import "@fontsource/open-sans/500.css";
import "@fontsource/raleway/400.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";

const DashChartComponent = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Quaterly");

  const handleMenuItemSelect = useCallback((item) => {
    setSelectedMenuItem(item);
  }, []);

  const Array = [
    {
      month: "Jan",
      money: 100,
    },
    {
      month: "Feb",
      money: 400,
    },
    {
      month: "Mar",
      money: 800,
    },
    {
      month: "Apr",
      money: 200,
    },
    {
      month: "May",
      money: 1100,
    },
    {
      month: "Jun",
      money: 700,
    },
    {
      month: "Jul",
      money: 700,
    },
    {
      month: "Aug",
      money: 300,
    },
    {
      month: "Sep",
      money: 600,
    },
    {
      month: "Oct",
      money: 1000,
    },
    {
      month: "Nov",
      money: 500,
    },
    {
      month: "Dec",
      money: 1200,
    },
  ];

  return (
    <>
      <Box>
        <HStack>
          <Box
            bgColor={"white"}
            margin={{ base: "20px", md: "20px", lg: "80px" }}
            borderRadius={"15px"}
            width={{ base: "90%", md: "100%", lg: "1500px", sm: "0%" }}
          >
            <HStack>
              <VStack>
                <Heading
                  margin={{ base: "5px", md: "20px" }}
                  marginBottom={{ lg: "0px", md: "0px" }}
                >
                  Overview
                </Heading>
                <Text margin={{ base: "5px", md: "5px", lg: "5px" }}>
                  Monthly Earning
                </Text>
              </VStack>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  width={{ base: "180px", md: "auto", lg: "auto", sm: "auto" }}
                  marginLeft={{
                    base: "120px",
                    md: "80%",
                    lg: "75%",
                    sm: "auto",
                  }}
                  marginRight={{ base: "10px" }}
                >
                  {selectedMenuItem || "Select an Option"}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => handleMenuItemSelect("Quaterly")}>
                    Quaterly
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuItemSelect("Yearly")}>
                    Yearly
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuItemSelect("Monthly")}>
                    Monthly
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuItemSelect("Daily")}>
                    Daily
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
            <Box>
              <ResponsiveContainer width={"100%"} aspect={3}>
                <BarChart data={Array} width={600} height={300}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <Bar
                    dataKey={"money"}
                    fill="#8884d8"
                    className="recharts-bar-rectangle"
                    radius={[10, 10, 10, 10]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default DashChartComponent;
