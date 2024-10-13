import { useState } from "react";
import "./ReviewForm.css";
export default function ReviewForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    title: "",
    author: "",
    rating: "",
    review: "",
    src: "",
    date: "",
  });
  function handleFormValuesChange(event) {
    //keywords: spread operator, event object, bracket and dot object notation
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
    fetch("https://week-7-full-stack-assignment.onrender.com/add_review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    setFormValues({
      username: "",
      title: "",
      author: "",
      rating: "",
      review: "",
      src: "",
      date: "",
    });
  }
  return (
    <div id="form-container">
      <form id="the-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="title">
            <label htmlFor="username">Username</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Write your username"
              required
              value={formValues.username}
              onChange={handleFormValuesChange}
            />
          </div>
        </div>
        <div className="form-section">
          <div className="title">
            <label htmlFor="title">Book Title</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Write the title of your book"
              required
              value={formValues.title}
              onChange={handleFormValuesChange}
            />
          </div>
        </div>

        <div className="form-section">
          <div className="title">
            <label htmlFor="author">Author Name</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Write name of the Author"
              required
              value={formValues.author}
              onChange={handleFormValuesChange}
            />
          </div>
        </div>
        <div className="form-section">
          <div className="title">
            <label htmlFor="rating">Rating</label>
          </div>
          <div className="input">
            <input
              type="number"
              min="1"
              max="5"
              id="rating"
              name="rating"
              placeholder="Write your rating of the book out of 5 stars"
              required
              value={formValues.rating}
              onChange={handleFormValuesChange}
            />
          </div>
        </div>
        <div className="form-section">
          <div className="title">
            <label htmlFor="review">Your Review of the book</label>
          </div>
          <div className="input">
            <textarea
              id="review"
              name="review"
              placeholder="Please write your review of the book"
              required
              value={formValues.review}
              onChange={handleFormValuesChange}
            ></textarea>
          </div>
        </div>
        <div className="form-section">
          <div className="title">
            <label htmlFor="src">Book Cover</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="src"
              name="src"
              placeholder="If you like, upload an image source for the cover of your book"
              value={formValues.src}
              onChange={handleFormValuesChange}
            />
          </div>
        </div>
        <div className="form-section">
          <div className="title">
            <label htmlFor="date">Date of Book Completion</label>
          </div>
          <div className="input">
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Whhat day did you complete your book?"
              required
              value={formValues.date}
              onChange={handleFormValuesChange}
            />
          </div>
        </div>
        <div className="form-section" id="submit">
          <button id="submit-button" onSubmit={handleSubmit} type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
