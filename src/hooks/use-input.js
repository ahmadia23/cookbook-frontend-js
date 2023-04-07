import { useState } from "react";

export const UseInput = (validate) => {
  const [enteredValue, setValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputValueHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setValueIsTouched(true);
  };

  const errorMessageHandler = (message, event) => {
    event.preventDefault();
    setErrorMessage(message);
  };

  const inputIsValid = validate(enteredValue);

  const hasError = !inputIsValid && valueIsTouched;

  const reset = () => {
    setValue("");
  };

  return {
    inputValue: enteredValue,
    hasError,
    inputIsValid,
    valueIsTouched,
    inputBlurHandler: inputBlurHandler,
    inputValueHandler: inputValueHandler,
    errorMessageHandler,
    errorText: errorMessage,
    reset: reset,
  };
};
