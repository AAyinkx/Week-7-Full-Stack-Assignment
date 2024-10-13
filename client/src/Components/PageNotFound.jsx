import { Link } from "react-router-dom";
import emptyShelf from "../../public/empty-Bookshelf.png";
import "./PageNotFound.css";
export default function PageNotFound() {
  return (
    <>
      <h2>Uh-Oh! There are no books in this library</h2>
      <Link to="/">
        <i className="fa-solid fa-house"></i> Back Home
      </Link>
      <br />
      <img id="empty-bookshelf" src={emptyShelf}></img>
    </>
  );
}
