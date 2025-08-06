import { useContext } from "react";
import PostContentButton from "./PostContentButton";
import { UserContext } from "../utils/contexts/UserContext";

export default function PostContent() {
  const userContextData = useContext(UserContext);
  return (
    <div>
      <span>Post Content</span>
      <PostContentButton />
      {userContextData.email}
    </div>
  );
}
