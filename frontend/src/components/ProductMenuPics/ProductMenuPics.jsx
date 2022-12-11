import earphones_menu from "../ProductMenuPics/earphones_menu.jpg"
import headphones_menu from "../ProductMenuPics/headphones_menu.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ProductMenuPics.css"
import { Link } from "react-router-dom";

function ProductMenuPics() {
  return (
    <Container>
      <Row className="productMenu">
        <Col>
        <Link to="/earphones"> <img src={earphones_menu} alt="earphones menu"/></Link>
        </Col>
        <Col>
        <Link to="/headphones"> <img src={headphones_menu} alt="headphones menu"/></Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductMenuPics;