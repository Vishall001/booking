import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Slideshow } from "./Slide";
export const ExploreIndia = () => {
  const slideImages = [
    {
      url: "https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=",
  
      caption:"Mumbai"
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684682.webp?k=30cf9de93f2a0f87eed7d2d0d9b3e6eccd5dcf3a4b68b4e0151c0800ddc84af7&o=",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684657.webp?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684769.webp?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o=",
    },
  ];
  return (
    <>
      <Box
        display={"flex"}
        width={"60%"}
        height={"auto"}
        margin={"auto"}
        marginTop={"30px"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
        <Image
          width={"15%"}
          height={"150px"}
          src={
            "https://r-xx.bstatic.com/data/mm/index_banner_getaway22_summer_2.jpg"
          }
        />
        <Box textAlign={"start"} marginLeft={"10px"} marginTop={"20px"}>
          <Text fontWeight={"bold"}>Save 15% or more </Text>
          <Text>
            This summer, make your dream trip a reality. Book and stay for less
            before 30 Sep 2022
          </Text>
          <Button marginTop={"15px"} marginBottom={"10px"} colorScheme="blue">
            Explore deals
          </Button>
        </Box>
      </Box>
      <Box width={"60%"} margin={"auto"} marginTop={"20px"}>
        <Box
          height={"260px"}
          width={"100%"}
          display={"flex"}
          marginBottom={"10px"}
        >
          <Box
            display={"flex"}
            width={"50%"}
            height={"auto"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684764.webp?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&amp;o=)"
          >
            <Box display={"flex"} marginTop={"10px"}>
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                New Delhi
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"10px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
          <Box
            width={"50%"}
            marginLeft={"50px"}
            height={"260px"}
            backgroundPosition={"center"}

            backgroundRepeat={"no-repeat"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684499.webp?k=05c9fc4396edfc04f1e0f3d00ffbe182ebd969c9d83857a8e10a4e046fae21cd&amp;o=)"
          >
            <Box display={"flex"} marginTop={"10px"}>
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Agra
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"10px"}
                marginLeft={"8px"}
                verticalAlign={"center"}

                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
        </Box>
        <Box width={"100%"} display={"flex"}>
          <Box
            display={"flex"}
            width={"33%"}
            height={"260px"}
            background-position={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}

            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684655.webp?k=2afb45c7a46dedbc5b5b360599dbbb7a7165ac823b22dd66d7602ea4c49de1c4&amp;o=)"
          >
            <Box display={"flex"} marginTop={"10px"}>
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Agra
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"12px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
          <Box
            width={"33%"}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}

            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684939.webp?k=125d0a8cab106ebfe2b99eafa9ea548ab13b5846a4034bbe35387accfbd94240&amp;o=)"
          >
            <Box display={"flex"} marginTop={"10px"}>
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Varanasi
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"12px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
          <Box
            width={"33%"}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}

            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/971345.webp?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&amp;o=)"
          >
            <Box display={"flex"} marginTop={"10px"}>
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Mumbai
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"12px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Explore India Slider */}
      <Box
        textAlign={"start"}
        width={"60%"}
        margin={"auto"}
        marginBottom={"100px"}
      >
        <Text fontWeight={"bold"}>Explore India</Text>
        <Text>These popular destinations have a lot to offer</Text>
        <Slideshow image={slideImages} no={6}/>
      </Box>
    </>
  );
};
