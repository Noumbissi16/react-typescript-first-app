import React, { useRef } from "react";

interface ShoppingFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

function ShoppingForm({ onAddItem }: ShoppingFormProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    onAddItem(
      productInputRef.current!.value,
      parseInt(quantityRef.current!.value)
    );
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Item name" ref={productInputRef} />
      <input type="number" min={0} ref={quantityRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingForm;
