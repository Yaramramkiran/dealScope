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
            <Flex
                className="max-w-7xl p-4"
                justify="space-between"
                h={`calc(100vh - 200px)`}
                mx="10px"
                gap="15px"
                mb={"10px"}
            >
                <Box w={"75%"}>
                    <ProductGrid />
                </Box>
                <Box w={"25%"}>
                    <PriceComparison />
                </Box>
            </Flex>
        </Stack>
    )
}

export default Home