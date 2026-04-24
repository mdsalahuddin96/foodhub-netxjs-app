"use client";

import OrderFoodCard from "@/components/OrderFoodCard";
import { OrderItemContext } from "@/provider/OrderItemContextProvider";

import { useContext } from "react";


const OrderPage = () => {
  const { orderItem } = useContext(OrderItemContext);
  
  return (
    <div>
      {orderItem.map((item) => <OrderFoodCard key={item.id} item={item}></OrderFoodCard>)}
    </div>
  );
};

export default OrderPage;
