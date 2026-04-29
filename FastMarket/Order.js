import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getDocs(collection(db, "orders"));
      setOrders(data.docs.map(doc => doc.data()));
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.map((order, i) => (
        <div key={i}>
          <p>Order #{i+1}</p>
          {order.items.map((item, j) => (
            <p key={j}>{item.name}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Orders;