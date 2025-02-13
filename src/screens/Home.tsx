import { Box, Flex, Stack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import BannerCarousel from "../components/BannerCarousel"
import ProductGrid from "../components/ProductGrid"
import PriceComparison from "../components/PriceComparison"


function Home() {
    return (
        <Stack>
            <Navbar />
            <BannerCarousel />

            <Flex className="max-w-7xl mx-auto p-4" justify="space-between" minH={"100vh"}>
                <Box className="w-3/4">
                    <ProductGrid />
                </Box>
                <Box className="w-1/4 ml-4">
                    <PriceComparison />
                </Box>
            </Flex>
        </Stack>
    )
}

export default Home