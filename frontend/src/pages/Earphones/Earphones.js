import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';


function Earphones() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductType();
    }, []);

    async function getProductType(){
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/products?type=Earphones', {
                params: {
                    type: "Earphones",
                }
            });
            setProducts(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return ( 
        <div className="earphone-products">
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <CardGroup>
                            <Card>
                                <img className="card-img-top" src={product.image} alt="products"/>
                                <Card.Body>
                                    <Card.Title>{product.brand} {product.type}</Card.Title>
                                    <Card.Text style={{ color:"black" }}>
                                    {product.name}
                                    </Card.Text>
                                    <Card.Text style={{ color:"black" }}>
                                    {product.price}
                                    </Card.Text>
                                    <Button variant='primary'>Learn More</Button>
                                    <Button variant='primary'>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                )
            })}
        </div>
     );
    
}
export default Earphones; 