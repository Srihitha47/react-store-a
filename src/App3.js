import React from 'react'
import {useState} from 'react'

export default function App3() {
    const[name,b]=useState(null);
    const[password,c]=useState(null);
    const[msg,setmsg]=useState();
    const handlesubmit=()=>{
        if(name==="john@gmail.com" && password==="1234"){
            setmsg("welcome john")
        }else{
            setmsg("access denied")
        }

    };
  return (
    <div>
        <h2>Login Form</h2>
        {msg}
    <p><input type='text' onChange={(event)=>b(event.target.value)} placeholder='enter name'></input></p>
    <p><input type='password' onChange={(event)=>c(event.target.value)} placeholder='enter password' ></input></p>
    <button onClick={handlesubmit}>Log In</button>
    </div>
  )
}
