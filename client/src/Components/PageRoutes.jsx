import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import AddReviews from "../Pages/AddReviews";
import ReadReviews from "../Pages/ReadReviews";
import PageNotFound from "./PageNotFound";
export default function PageRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/addReviews" element={<AddReviews />} />
        <Route path="/readReviews" element={<ReadReviews />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
