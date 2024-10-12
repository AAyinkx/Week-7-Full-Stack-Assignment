import { useState } from "react";

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
    fetch("http://localhost:8080/add_review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Write your username"
          required
          value={formValues.username}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="title">Book Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Write the title of your book"
          required
          value={formValues.title}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="author">Author Name</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Write name of the Author"
          required
          value={formValues.author}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          placeholder="Write your rating of the book out of 5 stars"
          required
          value={formValues.rating}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="review">Your Review of the book</label>
        <textarea
          id="review"
          name="review"
          placeholder="Please write your review of the book"
          required
          value={formValues.review}
          onChange={handleFormValuesChange}
        ></textarea>
        <label htmlFor="src">Book Cover</label>
        <input
          type="text"
          id="src"
          name="src"
          placeholder="If you like, upload an image source for the cover of your book"
          value={formValues.src}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="date">Date of Book Completion</label>
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Whhat day did you complete your book?"
          required
          value={formValues.date}
          onChange={handleFormValuesChange}
        />
        <button onSubmit={handleSubmit} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
