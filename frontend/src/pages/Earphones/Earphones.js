import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductsLayout from "../../components/ProductsLayout/ProductsLayout";


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
                        {product.brand} {product.type} {product.name} {product.price}
                    </div>
                )
            })}
        </div>
     );
    
}
export default Earphones; 