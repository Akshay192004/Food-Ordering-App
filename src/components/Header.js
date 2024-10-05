import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const data = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg items-center sm:bg-yellow-50">
      <div className="flex">
        
        <span className="m-4 p-4 hover:bg-orange-200">
           <img className="w-14 mx-3" src={LOGO_URL}></img>
          </span>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({cart.length} items)</Link>
          </li>
          {btnName === "Logout" && (
            <li className="px-4 py-1 font-bold bg-orange-500 rounded-lg text-white">
              👤 {data.loggedInUser}
            </li>
          )}
          <button
            className="px-4"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
