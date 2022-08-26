import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = () => {
    console.log("toggle has invoked");
    // setState((prevValue) => !prevValue);
  };

  return [state, toggle];
};
