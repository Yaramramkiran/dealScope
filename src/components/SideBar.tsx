import { Box, Button, VStack, } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ isOpen, onClose }) => {

    return (
        <>
            {/* Sidebar */}
            {isOpen && (
                <Box
                    position="fixed"
                    top="0"
                    left={isOpen ? "0" : "-250px"}
                    transition="left 0.3s ease"
                    w="250px"
                    h="100vh"
                    bg="gray.100"
                    p={4}
                    boxShadow="md"
                    zIndex="1999"
                >

                    <IoMdClose onClick={onClose} />

                    <VStack align="start" gap={4}>
                        <Button variant="ghost" w="full">Home</Button>
                        <Button variant="ghost" w="full">About</Button>
                        <Button variant="ghost" w="full">Services</Button>
                        <Button variant="ghost" w="full">Contact</Button>
                    </VStack>
                </Box>
            )}
        </>
    );
};

export default Sidebar;
