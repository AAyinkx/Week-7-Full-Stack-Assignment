import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [dropdownClass, setDropdownClass] = useState("false");

  function dropFunction() {
    setDropdownClass(!dropdownClass);
  }
  return (
    <>
      <div className="nav">
        <div className="navbar">
          <Link to="/">
            <i className="fa-solid fa-house"></i> Home
          </Link>
          <Link to="/readReviews">
            <i className="fa-solid fa-book-bookmark"></i> Reviews
          </Link>
          <Link to="/addReviews">
            <i className="fa-solid fa-pencil fa-flip-horizontal"></i> Add Review
          </Link>
          <Link to="/moreBooks">
            <i className="fa-solid fa-book-open"></i> More Books
          </Link>
        </div>
        <div className="dropdown">
          <i className="fa fa-bars" id="dropbtn" onClick={dropFunction}></i>
          <div
            className={
              dropdownClass ? "dropdown-content" : "show dropdown-content"
            }
            id="myDropdown"
          >
            <Link to="/">
              <i className="fa-solid fa-house"></i> Home
            </Link>
            <Link to="/readReviews">
              <i className="fa-solid fa-book-bookmark"></i> Reviews
            </Link>
            <Link to="/addReviews">
              <i className="fa-solid fa-pencil fa-flip-horizontal"></i> Add
              Review
            </Link>
            <Link to="/moreBooks">
              <i className="fa-solid fa-book-open"></i> More Books
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
