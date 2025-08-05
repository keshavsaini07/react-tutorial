import PropTypes from "prop-types";
import { UserActivity } from "./UserActivity";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
  props.callMe();
  return (
    <div id="user-profile">
      <UserUsername username={props.username} fullName="Abhi Singh" />
      <br />
      <b>Age: </b>
      <span>{props.age}</span>
      <UserActivity favoriteFoodsList={props.favoriteFoods} />
    </div>
  );
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  callMe: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  favoriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }) 
  ),
};
