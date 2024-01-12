import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
import { useCart } from "../context/CardContext";

import styles from "./CheckOutPage.module.scss";

function CheckOutPage() {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>Empty cart</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((item) => (
          <BasketCard key={item.id} data={item} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;
