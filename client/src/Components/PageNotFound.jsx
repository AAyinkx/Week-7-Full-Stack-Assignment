import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <>
      <h2>Uh-Oh! There are no books in this library</h2>
      <Link to="/">Back Home</Link>
    </>
  );
}
