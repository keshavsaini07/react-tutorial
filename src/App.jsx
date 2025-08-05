import UserDetails from "./components/UserDetails";

export default function App() {
  const users = [
    {
      id: 1,
      username: "Abhi",
      email: "abhi@gmail.com",
    },
    {
      id: 2,
      username: "Mike",
      email:90,
    },
  ];
  return (
    <div>
      {users.map((user) => {
        return <UserDetails key={user.id} user={user} />;
      })}
    </div>
  );
}
