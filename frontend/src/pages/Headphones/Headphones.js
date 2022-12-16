import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemMapper from "../../components/Headphones/ItemMapper";
import HeadphonePresent from "../../components/Headphones/HeadphonePresent";


const Headphones = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        await axios
        .get(`http://127.0.0.1:8000/api/products/`)
        .then(res=>{setProducts(res.data)});
    }

    return ( 
        <div>
            <button onClick={()=>{fetchProducts()}}>Click to get Product</button>
            <ItemMapper data={products} itemName={"product"} itemComponent={HeadphonePresent}/>
        </div>
     );
}
 
export default Headphones; 