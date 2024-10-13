import ReviewForm from "../Components/ReviewForm";
import "./AddReviews.css";
export default function AddReviews() {
  return (
    <>
      <h1 id="add-reviews-title">
        <i className="fa-solid fa-pencil fa-flip-horizontal"></i> Add Review
      </h1>
      <ReviewForm />
    </>
  );
}
