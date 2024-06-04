import { Checkbox, Input, InputGroup, Td, Text } from '@chakra-ui/react';

import { useStore } from '../../store';

export default function GiftInput({ name, id, handleToggleCheckbox }) {
  const gifts = useStore((store) => store.gifts);
  const updateGifts = useStore((store) => store.updateGifts);

  const giftData = gifts[name];

  const haveGiftProp = `have${id}`;
  const giftedProp = `gifted${id}`;
  const giftNameProp = `gift${id}`;

  const handleHasGiftChecked = (event) => {
    handleToggleCheckbox(name, haveGiftProp);

    if (event.target.checked) {
      updateGifts(name, 'have', true);
    }
  };

  const handleGiftedChecked = (event) => {
    handleToggleCheckbox(name, giftedProp);
    if (event.target.checked) {
      updateGifts(name, 'giftedToday', true);
      updateGifts(name, 'ready', false);
    }
  };

  const handleUpdateGiftText = (event) => {
    updateGifts(name, giftNameProp, event.target.value);
  };

  const hasGift = giftData[haveGiftProp];
  const isGifted = giftData[giftedProp];

  return (
    <Td sx={{ width: '25%' }}>
      <InputGroup>
        <Checkbox isChecked={hasGift} onChange={handleHasGiftChecked} />
        <Checkbox
          isChecked={isGifted}
          onChange={handleGiftedChecked}
          sx={{ ml: 1 }}
        />
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
