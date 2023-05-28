import { useState } from "react";
import { Form } from "./Components/Form";
import { Realtime } from "./Components/Realtime";
import { Display } from "./Components/Display";
export const Header = () => {
  const [counter, setCounter] = useState(0);
  const [textValue, setTextValue] = useState("");
  const [displayText, setDisplayText] = useState("");

  //handles the on change of input field
  const handleChange = (event) => {
    console.log(event);
    setTextValue(event.target.value);
  };
  const onSubmitValue = (event) => {
    //removes the default refresh behaviour
    event.preventDefault();
    setDisplayText(textValue);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const twiceIncrement = () => {
    setCounter(counter + 2);
  };

  const defaultValue = () => {
    setCounter(0);
  };
  return (
    <>
      <h1>Counter Application</h1>
      <h1>Initial Value: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={twiceIncrement}>Twice</button>
      <button onClick={defaultValue}>Reset</button>
      <hr />

      <h1>Props and Components</h1>
      {/* <h1>Controlled input field</h1>

      <form onSubmit={onSubmitValue}>
        <input type="text" value={textValue} onChange={handleChange} />
        <button type="submit">Submit</button>
        <h4>Real time typing: {textValue}</h4>
        <h4>Text after Submit: {displayText}</h4>
      </form> */}
      <Form
        value={textValue}
        onSubmitValue={onSubmitValue}
        handleChange={handleChange}
      />
      <Realtime value={textValue} />
      <Display value={displayText} />
    </>
  );
};
