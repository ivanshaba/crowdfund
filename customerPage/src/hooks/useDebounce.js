import { useEffect, useState } from "react";

export function useDebounce(value, time) {
  const [valueDebounce, setValueDebounce] = useState(value);
  useEffect(() => {
    const timmer = setTimeout(() => {
      setValueDebounce(value);
    }, time || 500);
    return () => {
      clearTimeout(timmer);
    };
  }, [value]);
  return valueDebounce;
}
