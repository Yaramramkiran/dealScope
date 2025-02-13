import { Box, Text, VStack, Badge } from "@chakra-ui/react";

const priceList = [
    { store: "Amazon.in", price: "₹64,900", details: "Apple iPhone 15 (128 GB) - Blue" },
    { store: "Flipkart", price: "₹59,999", details: "Apple iPhone 15 (Green, 128GB)", bestPrice: true },
    { store: "Croma", price: "₹75,499", details: "Apple iPhone 15 (256 GB) - Black" },
    { store: "Reliance Digital", price: "₹63,900", details: "Apple iPhone 15 (128 GB) - Black" },
];

const PriceComparison = () => {
    return (
        <Box p={4} borderWidth="1px" borderRadius="md" shadow="md">
            <VStack display="flex" flexDirection="column" gap={4} alignItems="stretch">
                {priceList.map((item, index) => (
                    <Box key={index} p={3} borderWidth="1px" borderRadius="md">
                        {item.bestPrice && <Badge colorScheme="orange" mb={1}>Best Price</Badge>}
                        <Text fontWeight="bold">{item.store}</Text>
                        <Text>{item.details}</Text>
                        <Text fontWeight="bold" fontSize="lg">{item.price}</Text>
                        {/* {index < priceList.length - 1 && <Divider mt={2} />} */}
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default PriceComparison;
