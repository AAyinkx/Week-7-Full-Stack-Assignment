import "./App.css";
import { Routes, Route } from "react-router-dom";
import Stylesheets from "./Components/Stylesheets";
//Importing Pages
import ReadReviews from "./Pages/ReadReviews";
import Homepage from "./Pages/Homepage";
import AddReviews from "./Pages/AddReviews";
//Importing Components
import Header from "./Components/Header";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./Components/Navbar";

export default function () {
  return (
    <>
      <Stylesheets />
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/addReviews" element={<AddReviews />} />
        <Route path="/readReviews" element={<ReadReviews />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
