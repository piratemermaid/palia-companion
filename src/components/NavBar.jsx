import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';

import ROUTES from '../router/routes';

export default function NavBar() {
  const { toggleColorMode } = useColorMode();

  const { pathname } = useLocation();

  return (
    <Flex>
      <Box>
        <HStack>
          {ROUTES.map((route) => {
            return (
              <Link to={route.path} key={route.path}>
                <Button
                  variant="link"
                  sx={{
                    mr: 4,
                    color: route.path === pathname ? 'green.500' : '',
                  }}
                >
                  {route.label}
                </Button>
              </Link>
            );
          })}
        </HStack>
      </Box>
      <Box sx={{ position: 'absolute', right: 10 }}>
        <IconButton
          aria-label="Toggle dark mode"
          onClick={toggleColorMode}
          icon={<MoonIcon />}
        />
      </Box>
    </Flex>
  );
}
