import { Image, Flex } from "@chakra-ui/react";

const banners = [
    "./src/assets/bannersimage.jpeg",
    "./src/assets/bannersimage.jpeg",
    "./src/assets/bannersimage.jpeg",
    "./src/assets/bannersimage.jpeg",
    "./src/assets/bannersimage.jpeg",
];

const BannerCarousel = () => {
    return (
        <Flex overflowX="auto" w={"100%"} gap={"10px"} px={"20px"} py={"20px"} background={"black"} mt={"50px"}>
            {banners.map((src, index) => (
                <Image key={index} w={"300px"} src={src} alt={`Banner ${index + 1}`} />
            ))}
        </Flex>
    );
};

export default BannerCarousel;
