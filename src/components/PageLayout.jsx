import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

export default function PageLayout({ title, children }) {
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid spacing={4}>
      <Box>
        <Text
          fontSize="xl"
          sx={{ fontSize: '2rem' }}
          color={colorMode === 'dark' ? 'green.300' : 'green.500'}
        >
          {title}
        </Text>
      </Box>

      <Box>{children}</Box>
    </SimpleGrid>
  );
}
