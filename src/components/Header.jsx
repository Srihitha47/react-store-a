import "./Header.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { appContext } from "../App";
export default function Header(){
    const { user, setUser, users, setUsers } = useContext(appContext);
    return(
        <div className="App-Header-Row">
            <div>React Store-{user.name}</div>
            <div>
                <Link to="home">Home</Link>|
                <Link to="cart">Cart</Link>|
                <Link to="login" >Login</Link>
            </div>
        </div>
    )
}


// import Cart from "./Cart";
// import "./Header.css";
// import { Link } from "react-router-dom";
// export default function Header() {
//   return (
//     <div className="App-Header-Row">
//       <h1>My React Store</h1>
//       <div>
//         <Link to="home">Home</Link>
//         <Link to="cart">Cart</Link>
//         <Link to="login" >Login</Link>
//         </div>
//     </div>
//   );
// }