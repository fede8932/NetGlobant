import React from "react";
const { useState} = require("react");

export function useInputHook() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return { value, onChange };
}