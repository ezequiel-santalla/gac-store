import "./itemDetail.css";
import { products } from "../../productsMock.js";
import { useEffect, useState } from "react";
const ItemDetail = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(products);
    console.log(items);
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col photos-column">
            <div className="img-container">
              <img src={items[0].imagenes[2]} alt="" className="main-img" />
              <br />
              <br />
              <div className="thumbnail-container">
                <img src={items[0].imagenes[2]} alt="" className="thumbnail" />
                <img src={items[0].imagenes[2]} alt="" className="thumbnail" />
                <img src={items[0].imagenes[2]} alt="" className="thumbnail" />
              </div>
            </div>
          </div>
          <div className="col card-details">
            <h3>Combo Lanzamiento</h3>
            <h3>
              <b>Apolo Pro Plus + Octupus</b>
            </h3>
            <p className="price">$141.256</p>
            <div className="payment-methods">
              <div className="payment-visa"></div>
              <div className="payment-mastercard"></div>
              <div className="payment-cabal"></div>
            </div>
            <div className="container px-5">
              <div class="d-grid gap-2">
                <button class="btn" type="button" style={{ color: "0F206C" }}>
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   {<img src={items[0].imagenes[2]} alt="" className="" />} */}
    </>
  );
};

export default ItemDetail;
