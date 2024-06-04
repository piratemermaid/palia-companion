import React from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Switch,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import GiftInput from '../components/gifts/GiftInput';
import CHARACTERS from '../data/characters';
import LOCATIONS from '../data/locations';
import defaultGiftsData from '../store/defaultData';
import { useStore } from '../store';
import { charHasGiftReady, giftIds } from '../utils/giftUtils';

export default function Gifts() {
  const [filters, setFilters] = React.useState({
    hideGiftedToday: false,
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

  const sortCharacters = (chars) => {
    const charsSorted = {
      ready: [],
      haveGift: [],
      rest: [],
      giftedToday: [],
    };

    for (const char of chars) {
      const giftData = gifts[char];

      if (giftData.giftedToday) {
        charsSorted.giftedToday.push(char);
      } else {
        if (giftData.ready) {
          charsSorted.ready.push(char);
        } else if (charHasGiftReady(giftData)) {
          charsSorted.haveGift.push(char);
        } else {
          charsSorted.rest.push(char);
        }
      }
    }

    return charsSorted.ready
      .concat(charsSorted.haveGift)
      .concat(charsSorted.rest)
      .concat(charsSorted.giftedToday);
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

    return sortCharacters(filteredChars);
  };

  return (
    <>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="filter-kilima" mb="0">
          Kilima
        </FormLabel>
        <Switch
          id="filter-kilima"
          isChecked={filters.showKilima}
          onChange={(event) => handleFilterChange(event, 'showKilima')}
        />
        <FormLabel htmlFor="filter-kilima" mb="0" sx={{ ml: 3 }}>
          Bahari Bay
        </FormLabel>

        <FormLabel htmlFor="filter-gifted-today" mb="0" sx={{ ml: 10 }}>
          Hide gifted today
        </FormLabel>
        <Switch
          isChecked={filters.hideGiftedToday}
          onChange={(event) => handleFilterChange(event, 'hideGiftedToday')}
          id="filter-gifted-today"
        />
      </FormControl>

      <Table variant="striped" size="sm">
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
        <Tbody>
          {getCharactersToDisplay().map((name) => {
            const isGiftedToday = gifts[name].giftedToday;
            const isReadyToDeliver = gifts[name].ready;
            const haveGift = charHasGiftReady(gifts[name]);

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
