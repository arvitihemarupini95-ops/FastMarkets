import { useState } from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Milk", price: 50, category: "Dairy", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Apple", price: 120, category: "Fruits", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Chips", price: 30, category: "Snacks", image: "https://via.placeholder.com/150" }
];

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || p.category === category)
  );

  return (
    <div>
      <h1>Products</h1>

      <input placeholder="Search..." onChange={e => setSearch(e.target.value)} />

      <select onChange={e => setCategory(e.target.value)}>
        <option>All</option>
        <option>Fruits</option>
        <option>Dairy</option>
        <option>Snacks</option>
      </select>

      <div className="grid">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default Home;