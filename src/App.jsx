import { UserProfile } from "./components/UserProfile";

export default function App() {
    const callMe = () => {
        console.log("helllo")
    }
  return (
    <div>
      <h1>Root Component</h1>
      <UserProfile username="Abhi" age={20} isLoggedIn={false} favoriteFoods={[
        {
            name: "Sushi",
            id: "sushi"
        },
        {
            name: "Pizza",
            id: "pizza"
        },
      ]} callMe={callMe} />
    </div>
  );
} 