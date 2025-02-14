import { Box, Flex, Input, Button, Image, Text } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import SideBar from "./SideBar";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showSideBar, setShowSideBar] = useState(false)

    const handleScroll = () => {
        if (typeof window !== "undefined") {
            // Get the current scroll position
            const currentScrollY = window.scrollY;

            // If scrolling down, hide navbar
            if (currentScrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                // If scrolling up, show navbar
                setShowNavbar(true);
            }

            // Update last scroll position
            setLastScrollY(currentScrollY);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);


    return (
        <>
            <Box
                bg="gray.100"
                px={4}
                py={2}
                w="full"
                position="fixed"
                // top="0"
                left="0"
                right="0"
                transition="top 0.3s ease" // Smooth transition for showing/hiding
                top={showNavbar ? "0" : "-80px"} // Adjust this value based on your navbar height
                zIndex="1000"
            >
                <Flex align="center" justify="space-between">
                    {/* Left: Logo & Menu */}
                    <Flex align="center" gap={2}>
                        <IoMenu size={24} onClick={() => setShowSideBar(true)} />
                        <Image src="/assets/dealscopesmainLogo.svg" alt="dealscopes" h="40px" w="100px" />
                    </Flex>

                    {/* Center: Search Bar */}
                    <Flex flex={1} maxW="500px" mx={4}>
                        <Input
                            placeholder="Trending Electronics"
                            border="1px"
                            borderColor="gray.300"
                            borderRadius="md"
                            _focus={{ borderColor: "blue.500" }}
                            px={4}
                            py={2}
                        />
                        <Button bg="red.500" color="white" px={4} py={2} _hover={{ bg: "red.600" }}>
                            <AiOutlineSearch size={20} />
                        </Button>
                    </Flex>

                    {/* Right: Links & Login */}
                    <Flex display={{ base: "none", md: "flex" }} align="center" gap={6}>
                        <Text color="gray.700" cursor="pointer" _hover={{ textDecoration: "underline" }}>
                            How we work | Help
                        </Text>
                        <Button border="1px" borderColor="gray.400" px={4} py={2} borderRadius="md" _hover={{ bg: "gray.100" }}>
                            Login/Sign up
                        </Button>
                    </Flex>
                </Flex>
            </Box>
            {showSideBar && <SideBar isOpen={showNavbar} onClose={() => setShowSideBar(false)} />}
        </>
    );
};

export default Navbar;
