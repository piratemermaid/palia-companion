import {
  Button,
  Checkbox,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import GiftInput from '../components/gifts/GiftInput';
import CHARACTERS from '../data/characters';
import { useStore } from '../store';
import defaultGiftsData from '../store/defaultData';

const giftIds = ['1', '2', '3', '4'];

export default function Gifts() {
  const gifts = useStore((store) => store.gifts);
  const updateGifts = useStore((store) => store.updateGifts);
  const setGifts = useStore((store) => store.setGifts);

  const handleToggleCheckbox = (name, property) => {
    updateGifts(name, property, !gifts[name][property]);
  };

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
            const isGiftedToday = gifts[name].giftedToday;
            const isReadyToDeliver = gifts[name].ready;

            return (
              <Tr
                key={name}
                sx={{
                  opacity: isGiftedToday ? 0.3 : 1,
                  color: isReadyToDeliver ? 'green.500' : '',
                  fontWeight: isReadyToDeliver ? 700 : '',
                }}
              >
                <Td>{name}</Td>
                <Td>
                  <Checkbox
                    isChecked={gifts[name].giftedToday}
                    onChange={() => handleToggleCheckbox(name, 'giftedToday')}
                  />
                </Td>
                <Td>
                  <Checkbox
                    isChecked={gifts[name].have}
                    onChange={() => handleToggleCheckbox(name, 'have')}
                  />
                </Td>
                <Td>
                  <Checkbox
                    isChecked={gifts[name].ready}
                    onChange={() => handleToggleCheckbox(name, 'ready')}
                  />
                </Td>
                {giftIds.map((id) => {
                  return (
                    <GiftInput
                      key={`${name}-${id}`}
                      name={name}
                      id={id}
                      handleToggleCheckbox={handleToggleCheckbox}
                    />
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <Button
        onClick={() => setGifts(defaultGiftsData)}
        sx={{ maxWidth: '100px' }}
      >
        Clear table
      </Button>
    </>
  );
}
