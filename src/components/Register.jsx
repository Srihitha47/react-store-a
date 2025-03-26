import React from "react";
import { useState } from "react";
import "./App8.css"
import { Link } from "react-router-dom";
export default function Register() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const handleSubmit = () => {
    setUsers([...users, user]);
  };
  const handleDelete = (value) => {
    setUsers(users.filter((element) => element !== value));
  };

  
  


  return (
    <div className="App-Row">
      <div>
        <h2>Registration Form</h2>
        <p>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="text"
            placeholder="Email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="password"
            placeholder="New password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
        </p>
        <p>
          <button onClick={handleSubmit}>Submit</button>
        </p>
        <p>
          <Link to="../login">Already a member? Log In</Link>
        </p>
      </div>
      <div>
        {
          users && users.map((value,index)=>(
            <li>{value.name}-{value.email}-{value.password}  <button onClick={() => handleDelete(value)}>Delete</button></li>
          ))
        }
      </div>
    </div>
  );
}

// import "./App8.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// export default function Register() {
//   const [products, setProducts] = useState([]);//products is an array
//   const [product, setProduct] = useState({});//product is an object

//   const handleSubmit = () => {
//     setProducts([...products, product]);//entire product object added in to array
//   };
//   return (
//     <div className="App-Row">
//       <div>
//         <h3>Registration Form</h3>
//         <p>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             onChange={(e) => setProduct({ ...product, name: e.target.value })}
//           ></input>
//         </p>
//         <p>
//           <input
//             type="text"
//             placeholder="Enter Email"
//             onChange={(e) => setProduct({ ...product, price: e.target.value })}
//           ></input>
//         </p>
//         <p>
//           <input
//             type="password"
//             placeholder="Enter Password"
//             onChange={(e) =>
//               setProduct({ ...product, quantity: e.target.value })
//             }
//           ></input>
//         </p>
//         <p>
//         <button onClick={handleSubmit}>Submit</button>
//         </p>
//         <p>
//         <Link to="../login">Go to Login Page</Link>

//       </p>
//       </div>
//       <div>
//         <h4>Details</h4>
//         <table border="1">
//          {/* in order to display content of array we use map function */}
//           {products &&
//             products.map((value, index) => (
//               <tr>
//                 <td>{value.name}</td>
//                 <td>{value.price}</td>
//                 <td>{value.quantity}</td>
//                 {/* <td>{value.price*value.quantity}</td> */}
//               </tr>
//             ))}
//         </table>
//       </div>
//     </div>
//   );
// }
