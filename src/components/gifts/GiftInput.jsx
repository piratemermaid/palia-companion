import { Checkbox, Input, InputGroup, Td } from '@chakra-ui/react';

import { useStore } from '../../store';

export default function GiftInput({ name, id, handleToggleCheckbox }) {
  const gifts = useStore((store) => store.gifts);
  const updateGifts = useStore((store) => store.updateGifts);

  const giftData = gifts[name];

  const giftedProp = `gifted${id}`;
  const giftNameProp = `gift${id}`;

  const handleUpdateGiftText = (event) => {
    updateGifts(name, giftNameProp, event.target.value);
  };

  return (
    <Td sx={{ width: '25%' }}>
      <InputGroup>
        <Checkbox
          isChecked={giftData[giftedProp]}
          onChange={() => handleToggleCheckbox(name, giftedProp)}
        />
        <Input
          size="sm"
          sx={{ ml: 3 }}
          value={giftData[giftNameProp]}
          onChange={handleUpdateGiftText}
        />
      </InputGroup>
    </Td>
  );
}
