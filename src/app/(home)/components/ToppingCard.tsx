"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export type Topping = {
  id: number;
  name: string;
  price: number;
  image: string;
  isAvailable: boolean;
};

type PropType = {
  topping: Topping;
  handleCheckBoxCheck: (toppingId: number) => void;
  selectedToppingId: number | null;
};

const ToppingCard = ({
  topping,
  selectedToppingId,
  handleCheckBoxCheck,
}: PropType) => {
  return (
    <Button
      variant={"outline"}
      className={`flex flex-col h-42 gap-2 ${
        selectedToppingId === topping.id ? "border border-primary" : ""
      }`}
      onClick={() => handleCheckBoxCheck(topping.id)}
    >
      <Image src={topping.image} width={80} height={80} alt={topping.name} />
      <h4>{topping.name}</h4>
      <p>&#8377; {topping.price}</p>
    </Button>
  );
};

export default ToppingCard;
