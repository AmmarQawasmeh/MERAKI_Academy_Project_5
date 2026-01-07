import React, { useEffect } from "react";
import "./Courses.css";
import Navbar from "./navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../redux/coursesSlice";
import { setCourseId } from "../redux/courseDetailsSlice";
import { FcLike } from "react-icons/fc";
import { addToFavourite } from "../redux/favouriteSlice";

const Courses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses/getAllcourses", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((result) => {
        dispatch(setCourses(result.data.allcourses));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const handleAddFavourite = (course) => {
    axios
      .post(
        "http://localhost:5000/favourite",
        { courseId: course.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        dispatch(addToFavourite(course));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />

      <section className="courses-section">
        <h2>Popular Courses</h2>

        <div className="filters">
          <button className="active">All</button>
          <button>Web Development</button>
          <button>Data Science</button>
          <button>Digital Marketing</button>
          <button>Business</button>
          <button>Management</button>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img
                src={course.image}
                alt={course.title}
                onClick={() => {
                  dispatch(setCourseId(course.id));
                  navigate("/courseDetails");
                }}
              />

              <h3>{course.title}</h3>

              <p>
                {course.lessons} Lessons • {course.students} Students
              </p>

              <div className="bottom">
                <span className="price">${course.price}</span>

                <button onClick={() => handleAddFavourite(course)}>
                  <FcLike />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="load-more">Load More</button>
      </section>
    </div>
  );
};

export default Courses;
