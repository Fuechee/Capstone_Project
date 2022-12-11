import { Link } from "react-router-dom";

const ProductsNav = () => {
    return ( 
        <nav>
            <ul className="navProducts">
                <li className="headphones">
                    <Link to="/headphones" style={{ textDecoration: "none", color: "Black" }}>
                        <b>Headphones</b>
                    </Link>
                </li>
                <li className="earphones">
                    <Link to="/earphones" style={{ textDecoration: "none", color: "Black" }}>
                        <b>Earphones</b>
                    </Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default ProductsNav;