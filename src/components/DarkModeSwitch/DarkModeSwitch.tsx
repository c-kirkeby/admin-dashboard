import { useColorMode, IconButton } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      // position="fixed"
      // top="1rem"
      // right="1rem"
      icon={isDark ? <FiMoon /> : <FiSun />}
      aria-label="open menu"
      variant="ghost"
      onClick={toggleColorMode}
    />
  );
};
