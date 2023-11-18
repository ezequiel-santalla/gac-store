import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock.js";
import { useEffect, useState } from "react";
import ItemDescription from "./itemDescription/ItemDescription";
import { db } from "../../firebaseConfig.js";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  let id = "geqgvGETsj1F1NojTmBR";
  // Buscamos en base a un id el producto
  useEffect(() => {
    let itemCollection = collection(db, "products");
    let document = doc(itemCollection, id);
    getDoc(document).then((res) => {
      setProductSelected({ id: res.id, ...res.data() });
    });
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
