import { Box, Input, Select } from "@chakra-ui/react";

export const Search = () => {
  return (
    <>
      <Box display={"flex"}>
        <Input  placeholder="Where are you going?"/>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
    </>
  );
};
