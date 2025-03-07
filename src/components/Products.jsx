import "./Products.css";
import React from 'react'

export default function Products() {
    const products= [ 

        {
            id:1,"name": "product 1",cost:50
        },
        {id:2,"name":"product 2",cost:100},
        {id:3,"name":"product 3",cost:250},
        {id:4,"name":"product 4",cost:350},
        {id:5,"name":"product 5",cost:450},
        {id:6,"name":"product 6",cost:550},
    
    ];
    return <div className="App-Products-Row">
        {products.map((value,index)=>(
            <div key={index} className="App-Products-Box">
                <h3>{value.name}</h3>
                <h4>{value.cost}</h4>
                <button>Add to Cart</button></div>
        ))}
    </div>;
    return (
        <div className="App-products-row">
      <div>Products</div>
      </div>
    )
  }

