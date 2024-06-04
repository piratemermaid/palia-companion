import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

export default function GiftTableFilters({ filters, handleFilterChange }) {
  return (
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
  );
}
