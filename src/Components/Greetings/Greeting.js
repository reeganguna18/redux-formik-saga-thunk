import React, { useState } from "react";

const Greeting = () => {
  const [textChanged, setTextChanged] = useState(false);

  const changeHandler = () => {
    setTextChanged(true);
  };
  return (
    <div>
      <h1>Hello World!</h1>
      {!textChanged && <p>It's nice to see you</p>}
      {textChanged && <p>Text Changed</p>}
      <button onClick={changeHandler}>change text</button>
    </div>
  );
};

export default Greeting;
