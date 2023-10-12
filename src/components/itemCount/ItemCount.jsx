import { useCount } from "../hooks/useCount";
import "./itemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  //Llamo al customHook useCount y uso la desestructuración para obtener el retorno de este custom hook

  const { count, increment, decrement } = useCount(initial, stock, initial);

  return (
    <>
      <div className="counter-container">
        <button onClick={decrement} className="counter-button">
          -
        </button>
        <span className="counter-value">
          <b>{count}</b>
        </span>
        <button onClick={increment} className="counter-button">
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
