import { Box, Image, SimpleGrid } from "@chakra-ui/react";

const listOfThumbNails = [
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg",
    "/assets/thumbnails.jpeg"
]

const ProductGrid = () => {
    return (
        <Box p={4} bg="blue.100" w={"100%"} h={"100vh"} overflow={"auto"}>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} rowGap={"30px"} columnGap={"20px"}>
                {listOfThumbNails.map((data, index) => (
                    // <Box key={index} bg="gray.300" h="160px" borderRadius="md"></Box>
                    <Image key={index} src={data} w={"100%"} alt={`Product ${index + 1}`} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default ProductGrid;
