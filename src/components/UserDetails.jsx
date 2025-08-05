import { useState } from "react";

export default function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  return (
    <div>
      <div>
        <button onClick={() => setIsEditing((currentState) => !currentState)}>
          Edit
        </button>
        <button onClick={() => {
            setUsers((currentUsersState) => {
               return currentUsersState.filter((currentUser) => currentUser.id !== user.id )
            })
        }}>Delete</button>
        {isEditing && (
          <button
            onClick={() => {
              setUsers((currentUsersState) => {
                return currentUsersState.map((currentUser) =>
                  currentUser.id === user.id
                    ? { ...currentUser, username, email }
                    : currentUser
                );
              });
              setIsEditing(false);
            }}
          >
            Save
          </button>
        )}
      </div>
      <div>
        <b>Id: </b>
        <span>{user.id}</span>
        <br />
        <b>Username: </b>
        {isEditing ? (
          <input
            name="username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        ) : (
          <span>{user.username}</span>
        )}
        <br />
        <b>Email: </b>
        {isEditing ? (
          <input
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <span>{user.email}</span>
        )}
        <br />
      </div>
    </div>
  );
}
