"use client";
import ToppingCard from "./ToppingCard";
import { useState } from "react";

const toppings = [
  {
    id: 1,
    name: "Chicken",
    image: "/chicken.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: 2,
    name: "jelapeno",
    image: "/Jelapeno.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: 3,
    name: "Cheese",
    image: "/cheese.png",
    price: 50,
    isAvailable: true,
  },
];

const ToppingList = () => {
  const [selectedToppingId, setSelectedToppingId] = useState<number | null>(null);

  const handleCheckBoxCheck = (toppingId: number) => {
    setSelectedToppingId(prevId => (prevId === toppingId ? null : toppingId));
  }

  return (
    <div className="mt-6">
      <h3>Extra toppings</h3>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {toppings.map((topping) => (
          <ToppingCard
            topping={topping}
            key={topping.id}
            handleCheckBoxCheck={handleCheckBoxCheck}
            selectedToppingId={selectedToppingId}
          />
        ))}
      </div>
    </div>
  );
};

export default ToppingList;
