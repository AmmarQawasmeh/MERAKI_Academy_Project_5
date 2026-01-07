import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  removeFromFavourite,
  setFavourite
} from "../redux/favouriteSlice";

function Favourite() {
  const dispatch = useDispatch();
  const favouriteCourses = useSelector(
    (state) => state.favourite.items
  );

  useEffect(() => {
    axios
      .get("http://localhost:5000/favourite", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        dispatch(setFavourite(res.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const handleRemove = (courseId) => {
    axios
      .delete(`http://localhost:5000/favourite/${courseId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        dispatch(removeFromFavourite(courseId));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="unauth-wrapper">
      {favouriteCourses.length === 0 ? (
        <div className="unauth-card">
          <div className="browser-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="unauth-content">
            <h1>Favourite Courses ❤️</h1>
            <h2>No favourite courses yet</h2>
          </div>
        </div>
      ) : (
        <div className="unauth-grid">
          {favouriteCourses.map((course) => (
            <div className="unauth-card" key={course.id}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <div className="unauth-bottom">
                <span className="price">${course.price}</span>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(course.id)}
                >
                  Remove ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourite;
