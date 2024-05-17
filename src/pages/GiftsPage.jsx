import { Checkbox, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import GiftInput from '../components/gifts/GiftInput';
import CHARACTERS from '../data/characters';
import { useStore } from '../store';

export default function Gifts() {
  const gifts = useStore((store) => store.gifts);

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
                  <Checkbox checked={gifts[name].giftedToday} />
                </Td>
                <Td>
                  <Checkbox checked={gifts[name].have} />
                </Td>
                <Td>
                  <Checkbox checked={gifts[name].ready} />
                </Td>
                <GiftInput checked={gifts[name].gift1} />
                <GiftInput checked={gifts[name].gift2} />
                <GiftInput checked={gifts[name].gift3} />
                <GiftInput checked={gifts[name].gift4} />
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
