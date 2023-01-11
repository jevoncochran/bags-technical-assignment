import {
  Card,
  CardBody,
  Heading,
  Text,
  Box,
  Button,
  Stack,
} from "@chakra-ui/react";
import { data } from "../seedData";

function BottomContainer() {
  return (
    <Card
      border="2.25px solid #C8C6C6"
      borderRadius="8px"
      position="relative"
      bottom="60px"
      w="432px"
      h="420px"
      paddingTop="80px"
      borderTopRadius="0"
      borderTop="2px solid #868686"
    >
      <CardBody textAlign="left">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb="16px"
        >
          <Heading
            as="h2"
            size="md"
            noOfLines={1}
            fontSize={{ base: "12px", md: "16px", lg: "20px" }}
          >
            About the Lender
          </Heading>
          <Button
            variant={{ base: "bagsNormal", xl: "bagsDesktop" }}
            size={{ base: "sm", xl: "lg" }}
          >
            Learn More
          </Button>
        </Box>
        <Text mb="16px" fontSize={{ base: "12px", lg: "16px" }}>
          {data.aboutLender}
        </Text>
        <Stack spacing={4}>
          {data.benefits.map((benefit, index) => (
            <Box
              key={index}
              bgColor="#ECEAF2"
              borderRadius="24px"
              color="#7B5BE4"
              padding="4px 8px"
              fontWeight={700}
            >
              {benefit}
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BottomContainer;
