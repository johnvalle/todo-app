import React, { forwardRef } from "react";
import {
  Input,
  FormErrorMessage,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  isInvalid: boolean;
  isRequired: boolean;
  errorMessage: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (props, ref) => {
    const { title, isInvalid, isRequired, errorMessage } = props;

    return (
      <>
        <FormControl isInvalid={isInvalid} isRequired={isRequired}>
          <FormLabel>{title}</FormLabel>
          <Input
            {...props} 
            ref={ref} 
            size="md"
            focusBorderColor="orange.300"
          />
          {isInvalid && (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          )}
        </FormControl>
      </>
    );
  }
);

export default CustomInput;
