'use client'
import { createContext, useState } from "react";


export const OrderItemContext=createContext()
const OrderItemContextProvider = ({children}) => {
    const [orderItem,setOrderItem]=useState([])
    const data={
        orderItem,
        setOrderItem
    }
    return (
        <OrderItemContext.Provider value={data}>
            {children}
        </OrderItemContext.Provider>
    );
};

export default OrderItemContextProvider;