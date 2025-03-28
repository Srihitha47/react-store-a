import React from 'react'
import { appContext } from "../App";
import { useContext } from "react";

export default function Cart() {
   const { user, setUser, users, setUsers ,product,cart,setCart} = useContext(appContext);
  return (
    <div>Cart</div>
  )
}
