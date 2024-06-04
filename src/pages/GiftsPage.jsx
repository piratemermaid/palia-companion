import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  SimpleGrid,
  Spacer,
  Switch,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import GiftInput from '../components/gifts/GiftInput';
import CHARACTERS from '../data/characters';
import LOCATIONS from '../data/locations';
import { useStore } from '../store';
import defaultGiftsData from '../store/defaultData';
import React from 'react';

const giftIds = ['1', '2', '3', '4'];

export default function Gifts() {
  const [filters, setFilters] = React.useState({
    hideGiftedToday: true,
    showKilima: true,
  });

  const gifts = useStore((store) => store.gifts);
  const updateGifts = useStore((store) => store.updateGifts);
  const setGifts = useStore((store) => store.setGifts);
  const resetGiftedToday = useStore((store) => store.resetGiftedToday);

  const handleFilterChange = (event, name) => {
    setFilters({
      ...filters,
      [name]: event.target.checked,
    });
  };

  const handleToggleCheckbox = (name, property) => {
    updateGifts(name, property, !gifts[name][property]);
  };

  const getHaveGift = (name) => {
    const giftData = gifts[name];

    let haveGift = false;

    for (let i = 1; i <= 4; i++) {
      if (giftData[`have${i}`] && !giftData[`gifted${i}`]) {
        haveGift = true;
      }
    }
    return haveGift;
  };

  const getCharactersToDisplay = () => {
    const filteredChars = CHARACTERS.filter((char) => {
      let include = true;

      if (filters.hideGiftedToday && gifts[char].giftedToday) {
        include = false;
      }

      if (filters.showKilima && !LOCATIONS[char].includes('Kilima')) {
        include = false;
      } else if (!filters.showKilima && !LOCATIONS[char].includes('Bahari')) {
        include = false;
      }

      if (include) return char;
    });

    return filteredChars.sort((a, b) => {
      return gifts[a].ready === gifts[b].ready ? 0 : a ? -1 : 1;
    });
  };

  return (
    <>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="filter-gifted-today" mb="0">
          Hide gifted today
        </FormLabel>
        <Switch
          isChecked={filters.hideGiftedToday}
          onChange={(event) => handleFilterChange(event, 'hideGiftedToday')}
          id="filter-gifted-today"
        />

        <FormLabel htmlFor="filter-kilima" mb="0" sx={{ ml: 5 }}>
          Show Kilima/Bahari Bay
        </FormLabel>
        <Switch
          id="filter-kilima"
          isChecked={filters.showKilima}
          onChange={(event) => handleFilterChange(event, 'showKilima')}
        />
      </FormControl>

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
          {getCharactersToDisplay().map((name) => {
            const isGiftedToday = gifts[name].giftedToday;
            const isReadyToDeliver = gifts[name].ready;
            const haveGift = getHaveGift(name);

            return (
              <Tr
                key={name}
                sx={{
                  opacity: isGiftedToday ? 0.3 : 1,
                  color: isReadyToDeliver
                    ? 'green.500'
                    : haveGift
                    ? 'blue.400'
                    : '',
                  fontWeight: isReadyToDeliver || haveGift ? 700 : '',
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
                    isChecked={haveGift}
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

      <HStack>
        <Button onClick={() => setGifts(defaultGiftsData)}>Clear table</Button>
        <Button onClick={resetGiftedToday}>Reset gifted today</Button>
      </HStack>
    </>
  );
}
