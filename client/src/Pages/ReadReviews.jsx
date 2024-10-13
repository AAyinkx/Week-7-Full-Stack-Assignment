import { useState, useEffect } from "react";
import { dateISOtoLocal } from "../Utils/dateFormat";
import defaultImage from "../../public/image-not-available.png";
export default function ReadReviews() {
  const [reviews, setReviews] = useState([]);
  const [isBroken, setIsBroken] = useState(false);
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

  function handleError(e) {
    setIsBroken(true);
    if (isBroken == true) {
      e.currentTarget.src = defaultImage;
    }
  }

  return (
    <>
      <div id="review-container">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <div>
              <img
                alt={`Book cover of ${review.title} `}
                src={review.src}
                onError={handleError}
              ></img>
            </div>
            <div>{dateISOtoLocal(review.date)}</div>
            <div>{review.username}</div>
            <div>
              {review.title}, <em>{review.author}</em>
            </div>
            <div>{review.rating}</div>
            <div>{review.review}</div>
          </div>
        ))}
      </div>
    </>
  );
}
