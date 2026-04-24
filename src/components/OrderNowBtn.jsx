"use client";
import { OrderItemContext } from "@/provider/OrderItemContextProvider";
import { Button } from "@heroui/react";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const OrderNowBtn = ({ food }) => {
  const { orderItem, setOrderItem } = useContext(OrderItemContext);
  const handleOrder = () => {
    const isExists = orderItem.find((item) => item.id === food.id);
    if (!isExists) {
      setOrderItem([...orderItem, food]);
      toast.success("Food Ordered Successful!");
    }
    else{
        toast.warning("Already Ordered!")
    }
  };

  return <Button onClick={handleOrder}>Order Now</Button>;
};

export default OrderNowBtn;
