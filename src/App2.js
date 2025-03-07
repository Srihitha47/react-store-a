import React from 'react'
import {useState} from 'react'

export default function App2() {
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
    };
    const decrement=()=>{
        setCount(count-1)
    };
    //useState needed to be imported
    // there is a variable called count with initial value as 0
  return (
    <div>
        <button Onclick={decrement}>-</button>
        {count}
        <button Onclick={increment}>+</button>
    </div>
  )
}
