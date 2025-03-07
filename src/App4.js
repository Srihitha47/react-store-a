import React from 'react'
import {useState} from 'react'

export default function App4() {
    const[user,b]=useState({});
    const[password,c]=useState({});
    const[msg,setmsg]=useState();
    const handlesubmit=()=>{
        if(user.email==="john@gmail.com" && user.password==="1234"){
            setmsg("welcome john")
        }else{
            setmsg("access denied")
        }

    };
  return (
    <div>
        <h2>Login Form</h2>
        {msg}
    <p><input type='text' onChange={(event)=>b({...user,email:event.target.value})} placeholder='enter name'></input></p>
    <p><input type='password' onChange={(event)=>c({...user,password:event.target.value})} placeholder='enter password' ></input></p>
    <button onClick={handlesubmit}>Log In</button>
    </div>
  )
}
