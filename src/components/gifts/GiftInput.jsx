import { Checkbox, Input, InputGroup, Td, Text } from '@chakra-ui/react';

import { useStore } from '../../store';

export default function GiftInput({ name, id, handleToggleCheckbox }) {
  const gifts = useStore((store) => store.gifts);
  const updateGifts = useStore((store) => store.updateGifts);

  const giftData = gifts[name];

  const giftedProp = `gifted${id}`;
  const giftNameProp = `gift${id}`;

  const handleGiftChecked = (event) => {
    handleToggleCheckbox(name, giftedProp);
    if (event.target.checked) {
      updateGifts(name, 'giftedToday', true);
    }
  };

  const handleUpdateGiftText = (event) => {
    updateGifts(name, giftNameProp, event.target.value);
  };

  const isGifted = giftData[giftedProp];

  return (
    <Td sx={{ width: '25%' }}>
      <InputGroup>
        <Checkbox isChecked={isGifted} onChange={handleGiftChecked} />
        {!isGifted ? (
          <Input
            size="sm"
            sx={{ ml: 2, p: 1 }}
            value={giftData[giftNameProp]}
            onChange={handleUpdateGiftText}
          />
        ) : (
          <Text sx={{ ml: 2, textDecoration: 'line-through' }}>
            {giftData[giftNameProp]}
          </Text>
        )}
      </InputGroup>
    </Td>
  );
}
