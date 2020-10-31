import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Stack, Button } from "@chakra-ui/core";

import CustomInput from "./CustomInput";
import { ITodoState } from "../constants";

type TodoFormProps = {
  onSubmit: (todo: ITodoState) => void;
};

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const { onSubmit } = props;

  const { handleSubmit, errors, register, reset } = useForm();

  const handleFormSubmit: SubmitHandler<ITodoState> = (values) => {
    console.log(values);
    onSubmit(values);
    reset();
  };

  return (
    <Box mb="5" mt="8" width="80%">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Stack spacing={5} alignItems={{ md: "center" }} flexDirection={{ base: "column", md: "row" }}>
          <CustomInput
            title="Title"
            name="title"
            placeholder="Enter a todo title"
            isInvalid={errors.title ? true : false}
            isRequired={true}
            errorMessage={errors.title?.message}
            ref={register({
              required: {
                value: true,
                message: "This field is required.",
              },
            })}
          />
          <CustomInput
            title="Description"
            name="description"
            placeholder="Enter a todo description"
            isInvalid={errors.description ? true : false}
            isRequired={true}
            errorMessage={errors.description?.message}
            ref={register({
              required: {
                value: true,
                message: "This field is required.",
              },
              
            })}
          />
          <Button type="submit" variantColor="green">
            Add Todo
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default TodoForm;
