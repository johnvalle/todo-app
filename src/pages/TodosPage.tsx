import React, { useContext } from "react";
import { Flex } from "@chakra-ui/core";

import { TodoBox, TodoForm } from "../components";
import { TodoContext } from "../contexts";
import { ITodoState } from "../constants";

const TodosPage: React.FC<{}> = () => {
  const { todos, actions } = useContext(TodoContext);

  return (
    <Flex
      alignItems="center"
      flexDir="column"
      backgroundColor="gray.100"
      minHeight="100vh"
    >
      <TodoForm onSubmit={(todo) => actions.addTodo(todo)} />
      {todos &&
        todos.map(({ title, description, isDone }: ITodoState, idx: number) => (
          <TodoBox
            key={idx}
            title={title}
            isDone={isDone}
            description={description}
            handleToggle={() => actions.toggleTodo(idx)}
            handleDelete={() => actions.deleteTodo(idx)}
          />
        ))}
    </Flex>
  );
};

export default TodosPage;
