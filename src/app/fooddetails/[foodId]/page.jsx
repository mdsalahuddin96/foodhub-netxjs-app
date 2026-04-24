

import OrderNowBtn from "@/components/OrderNowBtn";
import { CircleCheck, Star } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";

export async function generateStaticParams(){
  const res=await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods")
  const data=await res.json()
  const foods=data.data;
  return foods.map(food=>({foodId:food.id}))
}
const FoodDetailsPage = async ({ params }) => {
  const { foodId } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`
  );
  const data = await res.json();
  const food=data.data;
  const { dish_name, category, rating, price, image_link, main_ingredients } =
    food
  return (
    <div className="container mx-auto grid grid-cols-3 gap-4 p-10">
      <div className="border border-gray-200 flex justify-center items-center rounded-2xl">
        <div>
          <Image src={image_link} alt={dish_name} height={400} width={400} />
        </div>
      </div>
      <div className="col-span-2  flex flex-col gap-4">
        <div className="header ">
          <h1 className="text-2xl text-green-900 font-semibold">{dish_name}</h1>
          {category && (
            <div className="my-1 py-1.5 font-semibold flex justify-center w-20 rounded-2xl bg-amber-100 text-amber-600">
              {category.toUpperCase()}
            </div>
          )}
        </div>
        <div className="flex gap-10 ">
          <div className="border border-gray-200 text-center py-2 px-8 rounded-2xl text-gray-600 bg-gray-100 text-xl font-semibold ">
            <p>Price</p>
            <span>${price}</span>
          </div>
          <div className="border border-gray-200 flex flex-col items-center py-2 px-8 rounded-2xl text-amber-600 bg-gray-100 text-xl font-semibold ">
            <p>Rating</p>
            <div className=" flex gap-0.5 items-center">
              <Star></Star>
              {rating}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-medium text-green-900">Ingredients:</h2>
          {main_ingredients.map((ingradient, ind) => (
            <p key={ind} className="flex gap-1 items-center text-gray-500">
              <CircleCheck color="green" />
              {ingradient}
            </p>
          ))}
        </div>
        <OrderNowBtn food={food}/>
      </div>
    </div>
  );
};

export default FoodDetailsPage;
