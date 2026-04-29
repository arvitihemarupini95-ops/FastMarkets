import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Checkout() {
  const { cart } = useContext(CartContext);

  const placeOrder = async () => {
    await addDoc(collection(db, "orders"), {
      items: cart,
      createdAt: new Date()
    });
    alert("Order placed!");
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.map((item, i) => (
        <p key={i}>{item.name} - ₹{item.price}</p>
      ))}
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;