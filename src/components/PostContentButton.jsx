import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";

export default function PostContentButton() {
  const { id, setUserData } = useContext(UserContext);

  return (
    <div>
      <span>Post Content Button</span>
      <br />
      {id}
      <br />
      <button
        onClick={() => {
          setUserData((currentState) => ({
            ...currentState,
            name: "Abhi The Dev",
          }));
        }}
      >
        Click Me
      </button>
    </div>
  );
}
