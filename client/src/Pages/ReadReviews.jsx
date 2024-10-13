import { useState, useEffect } from "react";
import { dateISOtoLocal } from "../Utils/dateFormat";

import defaultImage from "../../public/image-not-available.png";
import "./ReadReview.css";
export default function ReadReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      const response = await fetch(
        "https://week-7-full-stack-assignment.onrender.com/book_reviews"
      );
      // console.log(response);
      //!Change this to render server link when deployed
      const reviewData = await response.json();
      // console.log(upgrades);
      setReviews(reviewData);
    }
    getReviews();
  }, []);

  function handleError(e) {
    e.currentTarget.src = defaultImage;
  }
  function StarNumber(number) {
    switch (number) {
      case 2:
        return (
          <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </>
        );
      case 3:
        return (
          <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </>
        );
      case 4:
        return (
          <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </>
        );
      case 5:
        return (
          <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </>
        );

      default:
        return (
          <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </>
        );
    }
  }

  return (
    <>
      <h1 id="read-reviews-title">
        <i className="fa-solid fa-book-bookmark"></i> Reviews
      </h1>
      <div id="review-container">
        {reviews.reverse().map((review) => (
          <div key={review.id} className="review">
            <div className="book-cover">
              <img
                alt={`Book cover of ${review.title} `}
                src={review.src}
                onError={handleError}
              ></img>
            </div>
            <div className="main-review">
              <div className="date">{dateISOtoLocal(review.date)}</div>
              <div className="username">{review.username}</div>
              <div className="title-author">
                {review.title}, <em>{review.author}</em>
              </div>
              <div className="rating-stars">{StarNumber(review.rating)}</div>
              <div className="book-review">{review.review}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
