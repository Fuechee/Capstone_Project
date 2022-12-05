import { Link } from "react-router-dom";

const NavItems = () => {
    return ( 
        <nav>
            <li className="home">
                <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
                    <b>Home</b>
                </Link>
            </li>
            <li className="Products">
                <Link to="/products" style={{ textDecoration: "none", color: "white" }}>
                    <b>Products</b>
                </Link>
            </li>
            <li className="support">
                <Link to="/support" style={{ textDecoration: "none", color: "white" }}>
                    <b>Support</b>
                </Link>
            </li>
        </nav>
     );
}
 
export default NavItems;