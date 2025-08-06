import { useContext } from "react";
import PostContent from "./PostContent";
import { UserContext } from "../utils/contexts/UserContext";

export default function PostContainer() {

  // consuming the context provided - returns an object with all fields as defined in the context
  const userContextData = useContext(UserContext);

  return (
    <div>
      <span>Post Container</span>
      <div>Id : {userContextData.id}</div>
      <div>Name : {userContextData.name}</div>
      <div>Username : {userContextData.username}</div>
      <div>Email : {userContextData.email}</div>
      <PostContent />
    </div>
  );
}
