import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";



function Headphones() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductType();
    }, []);

    async function getProductType(){
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/products?type=headphones', {
                params: {
                    type: "Headphones",
                }
            });
            setProducts(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return ( 
        <Row>
            {products.map((product) => {
                <Col sm={12} md={6} lg={4} key={product.id}>
                    {product.brand} {product.type} {product.name} {product.price}
                </Col>
            })}
        </Row>
     );
    
}
export default Headphones; 