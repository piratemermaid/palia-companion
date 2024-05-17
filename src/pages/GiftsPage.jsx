import { Checkbox, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import GiftInput from '../components/gifts/GiftInput';
import CHARACTERS from '../data/characters';
import { useStore } from '../store';

export default function Gifts() {
  const gifts = useStore((store) => store.gifts);
  const updateGifts = useStore((store) => store.updateGifts);

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
            return (
              <Tr key={name}>
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
                <GiftInput
                  name={name}
                  id="gift1"
                  isChecked={gifts[name].gift1}
                  handleToggleCheckbox={handleToggleCheckbox}
                />
                <GiftInput
                  name={name}
                  id="gift2"
                  isChecked={gifts[name].gift2}
                  handleToggleCheckbox={handleToggleCheckbox}
                />
                <GiftInput
                  name={name}
                  id="gift3"
                  isChecked={gifts[name].gift3}
                  handleToggleCheckbox={handleToggleCheckbox}
                />
                <GiftInput
                  name={name}
                  id="gift4"
                  isChecked={gifts[name].gift4}
                  handleToggleCheckbox={handleToggleCheckbox}
                />
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
