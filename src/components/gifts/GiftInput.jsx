import { Checkbox, Input, InputGroup, Td } from '@chakra-ui/react';

export default function GiftInput() {
  return (
    <Td sx={{ width: '22%' }}>
      <InputGroup>
        <Checkbox />
        <Input sx={{ ml: 3 }} />
      </InputGroup>
    </Td>
  );
}
