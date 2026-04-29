import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="nav">
      <h2>🛒 Grocery</h2>
      <input placeholder="Search products..." />
      <Link to="/">Home</Link>
      <Link to="/checkout">Cart ({cart.length})</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;