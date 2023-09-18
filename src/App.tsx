import { useState } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Item from "./components/models/item";
import ShoppingForm from "./components/ShoppingForm";
import { v4 } from "uuid";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: v4(), product, quantity }]);
  };
  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Chicken", quantity: 2 },
  // ];
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingForm onAddItem={addItem} />
    </div>
  );
}

export default App;
