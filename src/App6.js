import React from 'react'
import {useState} from 'react'
export default function App6() {
    const[hobby,setHobbies]=useState([]);
    const[text,setText]=useState();
    const handleSubmit=()=>{
        setHobbies([...hobby,text]);
        //..hobby,text txt the thing that we want to add is not replacing it is getting added

    }
  return (
    <div>
    <input
        type="text"
        placeholder="Enter your hobby"
        onChange={(event) => setText(event.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add</button>
      <hr></hr>
      {hobby && hobby.map((value, index) => <li key={index}>{value}</li>)}
    </div>
  )
}
