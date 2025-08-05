import { createElement } from "react";
import styles from "./users.module.scss";

// This is the old way we do not use it anymore. But under the hood, react uses these methods to create the actual elemnts that gets rendered to the DOM

export function UserActivity(props) {
  return createElement(
    "section",
    null,
    <div>
      <span>Favorite Cars</span>
      <br />
      <ul>
        <li>Mercedes</li>
        <li>Porsche</li>
        <li>BMW</li>
      </ul>
      <b className={styles.favoriteFoods}>Favorite Food</b>
      <br />
      <ul>
        {props.favoriteFoodsList.map((food) => (
          <li>{food.name}</li>
        ))}
      </ul>
    </div>
  );
}
