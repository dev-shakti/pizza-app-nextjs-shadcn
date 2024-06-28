import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

type PropTypes = { product: Product };

const ProductCard = ({ product }: PropTypes) => {
  return (
    <Card className="border-none rounded-xl">
      <CardHeader className="flex justify-center items-center">
        <Image alt="pizza-image" width={150} height={150} src={product.image} />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p>
          <span>From</span>
          <span className="font-bold ml-1">₹{product.price}</span>
        </p>
        <Dialog>
          <DialogTrigger className="bg-orange-200 hover:bg-orange-300 text-orange-500 shadow hover:shadow-lg px-6 py-2 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150">
            Choose
          </DialogTrigger>
          <DialogContent className="p-0 max-w-3xl">
            <div className="flex">
              <div className="p-8 flex items-center justify-center w-1/3">
                <Image
                  src={"/pizza-main.png"}
                  width={450}
                  height={450}
                  alt={product.name}
                />
              </div>
              <div className="p-8 w-2/3">
                <h4 className="font-bold text-xl"> {product.name}</h4>
                <p className="mt-2">{product.price}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
