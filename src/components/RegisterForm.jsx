import { useState } from "react";


export default function RegisterForm() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [displayName, setDisplayName] = useState("");

    // const isDisabled = !username || !password || !displayName;

    const [formFields, setFormFields] = useState({
        username: "",
        password: "",
        displayName: ""
    })
  return (
    <form>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          name="username"
          type="text"
          id="username"
          value={formFields.username}
          onChange={(e) => {
            setFormFields((currentState) => ({ ...currentState, username: e.target.value }));
          }}
          />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          type="password"
          id="password"
          value={formFields.password}
          onChange={(e) => {
            setFormFields((currentState) => ({ ...currentState, password: e.target.value }));
          }}
          />
      </div>
      <div>
        <label htmlFor="displayName">Display Name: </label>
        <input
          name="displayName"
          type="text"
          id="displayName"
          value={formFields.displayName}
          onChange={(e) => {
            setFormFields((currentState) => ({ ...currentState, displayName: e.target.value }));
          }}
        />
      </div>
      {/* <button disabled={isDisabled}>Register</button> */}
    </form>
  );
}
