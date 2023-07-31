import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function useClickOutSide() {
  const [show, setShow] = useState();

  const nodeRef = useRef();

  useEffect(() => {
    const handleClickEvent = (e) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickEvent);

    return () => {
      document.removeEventListener("click", handleClickEvent);
    };
  });

  return {
    show,
    setShow,
    nodeRef,
  };
}
