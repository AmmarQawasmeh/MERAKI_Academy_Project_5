import "./CoursesDetails.css";
import Lesson from "./Lesson";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Profile from "./Profile";

import { selectRole, selectIsAdmin, selectIsTeacher } from "../redux/selectors";

const CourseDetails = () => {
  const navigate = useNavigate();

  const role = useSelector(selectRole);
  const isAdmin = useSelector(selectIsAdmin);
  const isTeacher = useSelector(selectIsTeacher);
  const courseId = useSelector((state) => state.courseDetails.courseId);

  const [course, setCourse] = useState(null);
  const [user, setUser] = useState(null);
  const [lessons, setLessons] = useState([]);

  const getCourseById = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/courses/getCourseById/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setCourse(res.data.course);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserById = async (instructorId) => {
    if (!instructorId) return;
    try {
      const res = await axios.get(
        `http://localhost:5000/users/${instructorId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const getLessonsByCourseId = async (courseId) => {
    if (!courseId) return;
    try {
      const res = await axios.get(
        `http://localhost:5000/lessons/getlessonbyCourseId/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setLessons(res.data.lessons);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCourseById = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/courses/deleteCoursesById/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate("/Courses");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (courseId) getCourseById();
  }, [courseId]);

  useEffect(() => {
    if (course) {
      getUserById(course.instructorid);
      getLessonsByCourseId(course.id);
    }
  }, [course]);

  let diffDays = 0;
  if (course?.startcourse && course?.endcourse) {
    const start = new Date(course.startcourse);
    const end = new Date(course.endcourse);
    diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  }

  console.log("ROLE:", role);
  console.log("IS ADMIN:", isAdmin);
  console.log("IS TEACHER:", isTeacher);

  if (!course) return <p>Loading course...</p>;

  return (
    <div className="course-page">
      <div className="course-top">
        <div className="coursedetails-card course-header">
          <img src={course.image} alt="course" className="course-image" />

          <div className="course-info">
            <h2>{course.title}</h2>
            <p>{course.description}</p>

            <div className="course-meta">
              <span>⏱ {diffDays} days</span>
              <span>⭐ {course.rate}</span>
              <span>$ {course.price}</span>
            </div>

            <button className="start-btn">Start Course</button>
          </div>

          {isAdmin && (
            <div>
              <button
                className="update-btn"
                onClick={() => navigate("/UpdateCourses")}
              >
                Update
              </button>

              <button className="delete-btn" onClick={deleteCourseById}>
                Delete
              </button>
            </div>
          )}
        </div>

        {user && (
          <div className="instructor-bar side-instructor">
            <img src={user.image} alt="Instructor" className="instructor-img" />

            <div className="instructor-info">
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <p>Course Instructor</p>
            </div>
          </div>
        )}
      </div>

      <div className="course-content">
        <div className="lessons">
          <h3>Course Outline</h3>

          <div className="lesson-list">
            <Lesson />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
