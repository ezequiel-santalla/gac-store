import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock.js";
import { useEffect, useState } from "react";
import ItemDescription from "./itemDescription/ItemDescription";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  let id = 2;
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
  return (
    <>
      <ItemDetail productSelected={productSelected} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ItemDescription productSelected={productSelected} />
    </>
  );
};

export default ItemDetailContainer;
