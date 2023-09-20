import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock.js";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  let id = 1;
  // Buscamos en base a un id el producto
  useEffect(() => {
    const productFind = products.find((product) => {
      return product.id === id;
    });

    // Actualizamos el estado cuando se encuentra el producto
    if (productFind) {
      setProductSelected(productFind);
      console.log("encontrado");
    }
  }, [id]);
  return <ItemDetail productSelected={productSelected} />;
};

export default ItemDetailContainer;
