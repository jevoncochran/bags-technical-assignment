import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "./theme";
import TopContainer from "./components/TopContainer";
import BottomContainer from "./components/BottomContainer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          h="100vh"
        >
          <TopContainer />
          <BottomContainer />
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
