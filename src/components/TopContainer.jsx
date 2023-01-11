import {
  Card,
  CardBody,
  Heading,
  Text,
  Icon,
  Box,
  Tag,
  Stack,
} from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { data } from "../seedData";

const dollarUSLocale = Intl.NumberFormat("en-US");

function TopContainer() {
  return (
    <>
      <Tag
        position="relative"
        top="12px"
        left="120px"
        w="121px"
        bgColor="#7B5BE4"
        color="#fff"
        display="flex"
        justifyContent="center"
        borderRadius="6px"
        fontWeight={600}
        zIndex="999"
      >
        {data.evaluation}
      </Tag>
      <Card
        border="2.25px solid #868686"
        borderRadius="12px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        w="432px"
        h="229px"
        zIndex="998"
      >
        <CardBody textAlign="left">
          <Box>
            <Heading
              as="h1"
              mb="0.5rem"
              fontSize={{ base: "16px", sm: "16px", md: "20px", lg: "24px" }}
            >
              {data.loanType}
            </Heading>
            <Stack spacing={2} mb={{ base: "72px", md: "66px", lg: "36px" }}>
              <Text fontWeight={600} fontSize={{ base: "12px", lg: "16px" }}>
                {`By ${data.lender}`}
              </Text>
              <Box display="flex" alignItems="center">
                <Icon as={GrLocation} mr="4px" />
                <Text fontWeight={600} fontSize={{ base: "12px", lg: "16px" }}>
                  {data.location}
                </Text>
              </Box>
              <Box display="flex" alignItems="center">
                <Text fontSize={{ base: "10px", lg: "14px" }}>
                  Get Funded in&nbsp;
                </Text>
                <Text
                  as="b"
                  fontSize={{ base: "10px", lg: "14px" }}
                >{`${data.approvalDuration} days`}</Text>
              </Box>
            </Stack>
          </Box>
          <Text
            fontSize={{ base: "12px", md: "16px", lg: "22px" }}
            fontWeight={700}
            color="#7B5BE4"
          >
            {`$${dollarUSLocale.format(data.min)} - $${dollarUSLocale.format(
              data.max
            )}`}
          </Text>
        </CardBody>
      </Card>
    </>
  );
}

export default TopContainer;
