import "./itemDescription.css";
import { useEffect, useState } from "react";

const ItemDescription = ({ productSelected }) => {
  const [text, setText] = useState(productSelected.description);
  const [btnDescription, setBtnDescription] = useState(true);
  const [buttonClasses, setButtonClasses] = useState({
    primary: "description__button",
    secondary: "description__button-secondary",
  });

  useEffect(() => {
    setText(productSelected.description);
  }, [productSelected]);

  const onAdditionaInformation = () => {
    setText(productSelected.additionalInformation);
    setButtonClasses({
      primary: buttonClasses.secondary,
      secondary: buttonClasses.primary,
    });
  };
  return (
    <div className="container">
      <div className="container__description">
        <button
          onClick={() => {
            setText(productSelected.description);
            setButtonClasses({
              primary: "description__button",
              secondary: "description__button-secondary",
            });
          }}
          className={buttonClasses.primary}
          style={{ padding: "5px", marginRight: "3px" }}
        >
          Descripción
        </button>
        <button
          onClick={onAdditionaInformation}
          className={buttonClasses.secondary}
          style={{ padding: "5px", marginLeft: "3px" }}
        >
          Información Adicional
        </button>
      </div>
      {btnDescription && (
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          className="product-description"
        ></div>
      )}
    </div>
  );
};

export default ItemDescription;
