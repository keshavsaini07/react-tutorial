import { useEffect } from "react";
import { useDocumentClick } from "../utils/hooks/useDocumentClick";

export default function LoginForm() {
  useEffect(() => {
    const resizeEventHandler = () => {
      console.log("Window Resized");
    };
    window.addEventListener("resize", resizeEventHandler);

    return () => {
      // cleanup function, it is called whenver a component is unmounted
      console.log("unmounting login form");
      console.log("removing resize event listener");
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []);

  useDocumentClick();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        fetch("/api/login", {
          body: {
            username,
            password,
          },
          method: "POST",
        });
      }}
    >
      <label htmlFor="username">Username: </label>
      <input
        name="username"
        type="text"
        id="username"
        onChange={(e) => {
          console.log(`username ${e.target.value}`);
        }}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        name="password"
        type="password"
        id="password"
        onChange={(e) => {
          console.log(`password ${e.target.value}`);
        }}
      />
      <br />
      <button>Login</button>
    </form>
  );
}
