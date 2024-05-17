import { Checkbox, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import GiftInput from '../components/gifts/GiftInput';
import CHARACTERS from '../data/characters';

export default function Gifts() {
  return (
    <>
      <Table variant="striped" size="sm">
        <Thead>
          <Th>Character</Th>
          <Th>Gifted Today</Th>
          <Th>Have</Th>
          <Th>Ready</Th>
          <Th>Gift 1</Th>
          <Th>Gift 2</Th>
          <Th>Gift 3</Th>
          <Th>Gift 4</Th>
        </Thead>
        <Tbody>
          {CHARACTERS.map((name) => {
            return (
              <Tr key={name}>
                <Td>{name}</Td>
                <Td>
                  <Checkbox />
                </Td>
                <Td>
                  <Checkbox />
                </Td>
                <Td>
                  <Checkbox />
                </Td>
                <GiftInput />
                <GiftInput />
                <GiftInput />
                <GiftInput />
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
