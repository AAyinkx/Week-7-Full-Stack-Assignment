import { useState, useEffect } from "react";

export default function ReadReviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getReviews() {
      const response = await fetch("http://localhost:8080/book_reviews");
      // console.log(response);
      //!Change this to render server link when deployed
      const reviewData = await response.json();
      // console.log(upgrades);
      setReviews(reviewData);
    }
    getReviews();
  }, []);
  return (
    <>
      <div id="review-container">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <h2>{review.title}</h2>
            <p>{review.rating}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </>
  );
}
