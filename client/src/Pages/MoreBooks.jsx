import "./MoreBooks.css";
import bookData from "../Library/bookData.json";
import { Link, useSearchParams } from "react-router-dom";
export default function MoreBooks() {
  const [searchParams] = useSearchParams();
  //   useSearchParams = [searchParams];

  // I need to tell searchParams what keyword I am going to use to organise my data
  const sort = searchParams.get("sort");

  //I need to build some logic that organises my data is ascending and descending order

  if (sort === "asc-title") {
    bookData.sort((a, b) => a.title.localeCompare(b.title));
    console.log(bookData);
  } else if (sort === "desc-title") {
    bookData.sort((a, b) => b.title.localeCompare(a.title));
    console.log(bookData);
  } else {
    bookData;
  }
  if (sort === "asc-author") {
    bookData.sort((a, b) => a.author.localeCompare(b.author));
    console.log(bookData);
  } else if (sort === "desc-author") {
    bookData.sort((a, b) => b.author.localeCompare(a.author));
    console.log(bookData);
  } else {
    bookData;
  }

  return (
    <>
      <h1 id="more-books-title">
        <i className="fa-solid fa-book-open"></i> More Books
      </h1>
      <h2 className="sort">
        SORT BY <b>Title Name</b>
      </h2>
      <Link className="sort-tags" to={`/moreBooks?sort=asc-title`}>
        <i className="fa-solid fa-sort-up"></i> Sort ASC
      </Link>
      <Link className="sort-tags" to={`/moreBooks?sort=desc-title`}>
        <i className="fa-solid fa-sort-down"></i> Sort DESC
      </Link>
      <h2 className="sort">
        SORT BY <b>Author Name</b>
      </h2>
      <Link className="sort-tags" to={`/moreBooks?sort=asc-author`}>
        <i className="fa-solid fa-sort-up"></i> Sort ASC
      </Link>
      <Link className="sort-tags" to={`/moreBooks?sort=desc-author`}>
        <i className="fa-solid fa-sort-down"></i> Sort DESC
      </Link>
      {bookData.map((book) => (
        <h3 key={book.id}>
          {book.title}, <em>{book.author}</em>
        </h3>
      ))}
    </>
  );
}
