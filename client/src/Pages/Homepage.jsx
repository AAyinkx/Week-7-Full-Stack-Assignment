import bookshelf2 from "../../public/bookshelf2.png";
import "./HomePage.css";
export default function Homepage() {
  return (
    <>
      <h1 id="home-title">
        <i className="fa-solid fa-house"></i> Home
      </h1>
      <div id="intro-text">
        <h2>
          Think about that book sitting on your shelf. It&apos;s more than just
          a collection of words waiting for you—inside those pages, an entire
          world is waiting to be discovered. A world where the characters
          you&apos;ve yet to meet are living their lives, facing challenges, or
          uncovering secrets. Imagine this: the moment you open the book, time
          will stand still, and you&apos;ll step into a new reality. Whether
          it&apos;s adventure, wisdom, or escape you&apos;re craving, this book
          is the key to unlocking something unexpected. The last page you turn
          might just change the way you see everything. So, what are you waiting
          for? Dive in, because the story is incomplete without you.
        </h2>
      </div>

      <img id="main-bookshelf" src={bookshelf2}></img>
    </>
  );
}
