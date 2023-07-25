import { Box, Button, Icon } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

const ToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button
        onClick={() => toggleColorMode()}
        position={"fixed"}
        top="5rem"
        right="0"
        m="1rem"
      >
        {colorMode === "dark" ? (
          <Icon as={BsSunFill} color={"orange.500"} />
        ) : (
          <Icon as={BsFillMoonFill} color={"blue.500"} />
        )}
      </Button>
    </Box>
  );
};

export default ToggleColorMode;
