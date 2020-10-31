import React from "react";
import {
  Box,
  PseudoBox,
  Text,
  Stack,
  Checkbox,
  CloseButton,
} from "@chakra-ui/core";

import { ITodoState } from "../constants";

interface TodoBoxProps extends ITodoState {
  handleDelete: () => void;
  handleToggle: () => void;
}

const TodoBox: React.FC<TodoBoxProps> = (props) => {
  const { title, description, isDone, handleDelete, handleToggle } = props;

  return (
    <PseudoBox
      display={{ base: "block", md: "flex" }}
      backgroundColor="white"
      my="3"
      borderRadius="8px"
      borderWidth="2px"
      borderColor={isDone ? "green.500" : "gray.200"}
      p="5"
      width="80%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack isInline spacing={4}>
        <Stack spacing={5} isInline>
          <Box>
            <Text
              fontSize="xl"
              fontWeight="bold"
              style={{ textDecoration: isDone ? "line-through" : "" }}
            >
              {title}
            </Text>
            <Text
              fontSize="sm"
              style={{ textDecoration: isDone ? "line-through" : "" }}
            >
              {description}
            </Text>
          </Box>
        </Stack>
      </Stack>
      <Box>
        <Stack isInline spacing={5}>
          <Checkbox
            variantColor="green"
            isChecked={isDone}
            size="lg"
            onChange={() => handleToggle()}
          >
          </Checkbox>
          <CloseButton onClick={() => handleDelete()} />
        </Stack>
      </Box>
    </PseudoBox>
  );
};

export default TodoBox;
