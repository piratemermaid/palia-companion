import { Outlet } from 'react-router-dom';
import { Box, SimpleGrid } from '@chakra-ui/react';

import NavBar from './components/NavBar';
import './styles/App.css';

export default function App() {
  return (
    <SimpleGrid columns={1} spacing={4}>
      <Box>
        <NavBar />
      </Box>

      <Outlet />
    </SimpleGrid>
  );
}
