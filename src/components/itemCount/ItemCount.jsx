import { useCount } from "../hooks/useCount";
import "./itemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  //Llamo al customHook useCount y uso la desestructuración para obtener el retorno de este custom hook

  const { count, increment, decrement } = useCount(initial, stock);

  return (
    <>
      <div className="count" style={{ borderRadius: "20px" }}>
        <button onClick={decrement} className="count__btn">
          -
        </button>

        <span className="">
          <b>{count}10</b>
        </span>
        <button onClick={increment} className="count__btn">
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
