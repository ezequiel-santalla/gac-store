import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import impresora from "/impresora-3d.png"
import check from '/img/check.svg'

const CardItem = ({ id }) => {
  return (
    <div className="d-flex mt-4 justify-content-between align-items-center">
      <Link to={`/products`} style={{ textDecoration: 'none', display: 'flex', gap: '2rem' }}>
        <Card className="border border-0" style={{ width: "16rem" }}>
          <div className="d-flex justify-content-between mt-3 mb-3">
            <div className="d-flex ms-4">
              <img src={check} alt="Check" />
              <p className="ms-2 mb-0 py-3" style={{ color: 'green' }}>En Stock</p>
            </div>
            <div>
              <p className="me-4 mb-0 p-3 text-white" style={{ background: '#0F206C', borderRadius: '50%', clipPath: 'polygon()' }}>15% Off</p>
            </div>
          </div>
          <Card.Img variant="top" src={impresora} />
          <Card.Body>
            <Card.Title className="mb-4">Impresora 3D Modelo 1</Card.Title>
            <Card.Text className="m-1">$499.99</Card.Text>
            <Card.Text className="m-1 fw-semibold fs-5" style={{ color: '#0F206C' }}>$499.99</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default CardItem;


