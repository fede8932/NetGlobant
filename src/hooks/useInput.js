const { useState, useEffect } = require("react");

export function useInput(initialState = "") {
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    setValue(initialState);
  }, [initialState]);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
}
