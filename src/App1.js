import React from 'react'

export default function App1(props) {
  return (
    <div style={{backgroundColor:'red'}}>{props.name}-{props.age}</div>
    // we are calling the name that given in indexedDB.js
  )
}
