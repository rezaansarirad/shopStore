import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helper/helper";

import styles from "./SideBar.module.scss";
import { categories } from "../constants/list";

function SideBar({ setQuery, query }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") {
      return;
    }
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category ? styles.selected : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
