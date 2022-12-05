import axios from "axios";
import { useEffect } from "react";


const HeadphonePage = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/products/all/");
                setProducts(response.data);
            }catch (error) {
                console.log(error.response.data)
            }
        }
    })
    getProducts();

    return ( 
        <h1>Headphones</h1>
     );
}
 
export default HeadphonePage;