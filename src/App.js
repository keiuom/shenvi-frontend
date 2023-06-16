import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Components/Theme/Theme.js';

function App() {
  return (
    <ChakraProvider theme = {theme} >
      <Main/>
    </ChakraProvider>
    
  );
}

export default App;
