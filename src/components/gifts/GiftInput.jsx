import { Checkbox, Input, InputGroup, Td } from '@chakra-ui/react';

export default function GiftInput({ checked }) {
  return (
    <Td sx={{ width: '22%' }}>
      <InputGroup>
        <Checkbox checked={checked} />
        <Input sx={{ ml: 3 }} />
      </InputGroup>
    </Td>
  );
}
