import { useEffect, useState } from "react";
import "./itemDetail.css";
import ItemCount from "../itemCount/ItemCount";
const ItemDetail = ({ productSelected }) => {
  //Definimos un estado que guardara las miniaturas
  const [thumbnails, setThumbnails] = useState([]);

  //definimos un estado donde se guarde la miniatura principal
  const [mainImg, setMainImg] = useState(null);

  //creamos un estado que guarde a la miniatura activa
  const [activeThumbnail, setActiveThumbnail] = useState(null);

  useEffect(() => {
    if (productSelected && productSelected.imagenes) {
      // Si hay imágenes en el producto seleccionado, las establecemos en el estado
      setThumbnails(productSelected.imagenes);
      setMainImg(productSelected.imagenes[0]);
    }
  }, [productSelected]);

  const cambiarPuntero = (event) => {
    // Obtén la thumbnail que se hizo clic
    const clickedThumbnail = event.target;

    // Quita la clase "active" del elemento actualmente activo (si existe)
    const currentActiveThumbnail = document.querySelector(".active");
    if (currentActiveThumbnail) {
      currentActiveThumbnail.classList.remove("active");
    }

    // Agrega la clase "active" a la thumbnail clicada
    clickedThumbnail.classList.add("active");

    // Actualiza el estado en React para reflejar la thumbnail activa
    setActiveThumbnail(clickedThumbnail);

    //cambiamos la imagen main
    setMainImg(clickedThumbnail.src);
  };

  const onAdd = () => {};

  return (
    <>
      {productSelected ? (
        <div className="container">
          <div className="row">
            <div className="col photos-column">
              <div className="img-container">
                <img
                  src={productSelected.imagenes && mainImg}
                  alt=""
                  className="main-img"
                />
                <br />
                <br />
                <div className="thumbnail-container">
                  {/* Renderizamos las miniaturas en función del estado */}
                  {thumbnails.map((thumbnail, index) => (
                    <img
                      key={index}
                      src={thumbnail}
                      alt=""
                      className={`thumbnail ${index === 0 ? "active" : ""}`}
                      onClick={cambiarPuntero}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col card-details">
              <h3>Combo Lanzamiento</h3>
              <h3>
                <b>{productSelected.title}</b>
              </h3>
              <p className="price">${productSelected.price}</p>
              <div className="payment-methods">
                <div className="payment-visa"></div>
                <div className="payment-mastercard"></div>
                <div className="payment-cabal"></div>
              </div>
              {/* Parte de las cuotas */}
              <div>
                <div className="cuota">
                  <b>3 cuotas</b> fijas de ${productSelected.price / 3}
                </div>
                <div className="cuota">
                  <b>6 cuotas</b> fijas de ${productSelected.price / 6}
                </div>
                <div className="cuota">
                  <b>12 cuotas</b> fijas de ${productSelected.price / 12}
                </div>
              </div>
              {/* Stock */}
              <p>
                <b>Stock</b>: {productSelected.stock}
              </p>
              {/* Contador de productos */}
              <div className="row">
                <div className="col-5">
                  <p>
                    <b>Cantidad:</b>
                    <br />
                    (Mínimo {productSelected.minimum} unidades)
                  </p>
                </div>
                <div className="col-7">
                  <ItemCount
                    stock={productSelected.stock}
                    initial={productSelected.minimum}
                    onAdd={onAdd}
                  />
                </div>
              </div>
              <div className="sku-text">SKU: {productSelected.sku}</div>
              {/* Botón para comprar */}
              <div className="container px-5">
                <div className="d-grid gap-2">
                  {/* <button
                    className="buttom"
                    type="button"
                    style={{ color: "0F206C", background: "red" }}
                  >
                    <p className="buttom__text">Comprar</p>
                  </button> */}
                  <button className="buttom" type="button">
                    <div className="buttom__text">Comprar Ahora</div>
                  </button>
                  <button
                    className="buttom-secondary"
                    type="button"
                    style={{ color: "0F206C" }}
                  >
                    <i class="fa-solid fa-cart-plus"></i>
                    <div
                      className="buttom__text"
                      style={{ marginRight: "15px", paddingLeft: "5px" }}
                    >
                      Añadir al carrito
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>cargando...</h2>
      )}
      ;{/*   {<img src={items[0].imagenes[2]} alt="" className="" />} */}
    </>
  );
};

export default ItemDetail;
