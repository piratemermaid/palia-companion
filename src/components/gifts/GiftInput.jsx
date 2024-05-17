import { Checkbox, Input, InputGroup, Td } from '@chakra-ui/react';

export default function GiftInput({
  name,
  id,
  isChecked,
  handleToggleCheckbox,
}) {
  return (
    <Td sx={{ width: '22%' }}>
      <InputGroup>
        <Checkbox
          isChecked={isChecked}
          onChange={() => handleToggleCheckbox(name, id)}
        />
        <Input sx={{ ml: 3 }} />
      </InputGroup>
    </Td>
  );
}
