import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


const Earphones = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/products?type=earphones");
                setProducts(response.data);
                console.log("earphones",response.data)
            } catch (error) {
                console.log(error.response.data);
            }
        };
        fetchProducts();
    },[]);
    return ( 
        <div>
            <h1>Earphones</h1>
            {products &&
                products.map((product) => (
                    <p key={product.id}>
                        {product.brand} {product.type} {product.name} {product.price}
                    </p>
                ))}
        </div>
     );
}
 
export default Earphones;