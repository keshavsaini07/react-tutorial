import { useState } from "react";
import LoginForm from "./components/LoginForm";

export default function App() {
  const [toggle, setTOggle] = useState(false);

  return <div>
    <button onClick={() => setTOggle((currentState) => !currentState)}>Toggle</button>
    {toggle && <LoginForm/>}
  </div>;
}


