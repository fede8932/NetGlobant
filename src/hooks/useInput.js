import React from "react";

export function useInput() {
  const [value, setValue] = React.useState("");

  const onChange = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  return { value, onChange };
}


