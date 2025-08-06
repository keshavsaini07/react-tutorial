import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    document.title = "React  Tutorial ";
  }, [sync]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal(),
          }
        );
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();

    return () => {
      controller.abort();
    };
  });
  return (
    <div>
      <div>You clicked the button {counter} times. </div>
      <button onClick={() => setCounter((count) => count + 1)}>CLick Me</button>
      <button onClick={() => setSync((current) => !current)}>Sync</button>
    </div>
  );
}

// export default function App() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [counter, setCounter] = useState(3);

//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: "Abhi",
//       email: "abhi@gmail.com",
//     },
//     {
//       id: 2,
//       username: "Mike",
//       email: "mike@gmail.com",
//     },
//   ]);

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           const newUser = {
//             id: counter,
//             username, email
//           }
//           setCounter((currentCounter) => currentCounter+1);
//           setUsers((currentUsersState) => [ ...currentUsersState, newUser])
//         }}
//       >
//         <div>
//           <label htmlFor="username">Username: </label>
//           <input
//             name="username"
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email: </label>
//           <input
//             name="email"
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button>Add User</button>
//       </form>
//       <br />
//       {users.map((user) => (
//         <UserDetails key={user.id} user={user} setUsers={setUsers} />
//       ))}
//     </div>
//   );
// }
