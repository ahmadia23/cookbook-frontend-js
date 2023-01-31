import { useState } from "react";

const UseInput = (validate) => {
  const [enteredValue, setValue] = useState('');
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const inputValueHandler = (event) => {
    setValue(event.target.value);
  }

  const inputBlurHandler = (event) => {
    setValueIsTouched(true);
  }

  const inputIsValid = validate(enteredValue);

  const hasError = !inputIsValid && valueIsTouched;

  const reset = () => {
    setValue('');
  }

  return ({
    inputValue: enteredValue,
    hasError,
    inputIsValid,
    valueIsTouched: valueIsTouched,
    inputBlurHandler: inputBlurHandler,
    inputValueHandler: inputValueHandler,
    reset: reset
  })
}


export default UseInput;
