import { Star } from "@gravity-ui/icons";
import { Avatar, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const FoodCard = ({ food }) => {
  const { dish_name, category, rating, price, image_link } = food;
  return (
    <Card>
      <Image src={image_link}
      alt={dish_name} 
      height={100}
      width={100}/>
      <Card.Header>
        <Card.Title className="font-semibold">{dish_name}</Card.Title>
        {category&&<div className="my-1 flex justify-center w-20 rounded-2xl bg-amber-100 text-amber-600">{category.toUpperCase()}</div>}
      </Card.Header>
      <Card.Footer className="flex justify-between ">
        <span className="text-green-900 font-semibold">${price}</span>
        <div className="text-lg text-amber-600 flex gap-0.5 items-center"><Star></Star>{rating}</div>
      </Card.Footer>
    </Card>
  );
};

export default FoodCard;
