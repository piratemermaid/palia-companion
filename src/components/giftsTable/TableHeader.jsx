import { Th, Thead, Tr } from '@chakra-ui/react';

export default function GiftTableHeader() {
  return (
    <Thead>
      <Tr>
        <Th>Character</Th>
        <Th>Gifted Today</Th>
        <Th>Have</Th>
        <Th>Ready</Th>
        <Th>Gift 1</Th>
        <Th>Gift 2</Th>
        <Th>Gift 3</Th>
        <Th>Gift 4</Th>
      </Tr>
    </Thead>
  );
}
