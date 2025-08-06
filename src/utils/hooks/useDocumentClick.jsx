import { useEffect } from "react";

// an example for a simple custom hook

export function useDocumentClick() {
  useEffect(() => {
    console.log("useDocumentClick");
    const handleDocumentClick = () => {
      console.log("CLicked Document");
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      console.log("removing click event listener");
      document.removeEventListener('click', handleDocumentClick)
    };
  }, []);
}
