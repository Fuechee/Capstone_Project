import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function ProductsLayout() {
  return (
    <CardGroup>
      <Card border="black" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{}</Card.Title>
          <Card.Text style={{ color:"black" }}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant='primary'>Learn More</Button>
          <Button variant='primary'>Add to Cart</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default ProductsLayout;