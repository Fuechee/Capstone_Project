// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import SupportPage from "./pages/SupportPage/SupportPage";
import Headphones from "./pages/Headphones/Headphones";
import Earphones from "./pages/Earphones/Earphones";
import CartPage from "./pages/CartPage/CartPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<PrivateRoute> <ProfilePage /> </PrivateRoute>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
