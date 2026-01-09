import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { setCourses } from "../redux/coursesSlice";
import { logout } from "../redux/auth";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);

  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch users
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setStudents(users.filter((u) => Number(u.role) === 2));
    setTeachers(users.filter((u) => Number(u.role) === 3));
  }, [users]);

  // Fetch courses
  useEffect(() => {
    axios
      .get("http://localhost:5000/courses/getAllcourses", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => dispatch(setCourses(res.data.allcourses)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="logo">EduAdmin</h2>

        <ul>
          <li className="active" onClick={() => navigate("/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/courses")}>Courses</li>
          <li onClick={() => navigate("/student")}>Students</li>
          <li>Instructors</li>

          {/* Dropdown */}
          <li
            className="dropdown"
            onClick={() => setOpenMenu(!openMenu)}
          >
            Settings
            {openMenu && (
              <ul className="dropdown-menu">
                <li onClick={() => navigate("/content")}>Content</li>
                <li onClick={() => navigate("/about")}>About us</li>
                <li
                  onClick={() => {
                    localStorage.clear();
                    dispatch(logout());
                    navigate("/login");
                  }}
                >
                  Logout
                </li>
              </ul>
            )}
          </li>
        </ul>
      </aside>

      <main className="main">
        <div className="topbar">
          <h1>Admin Dashboard</h1>
          <div className="profile">Admin</div>
        </div>

        <div className="stats">
          <div className="card">
            <h3>Total Students</h3>
            <p>{students.length}</p>
          </div>

          <div className="card">
            <h3>Total Courses</h3>
            <p>{courses.length}</p>
          </div>

          <div className="card">
            <h3>Instructors</h3>
            <p>{teachers.length}</p>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <p>$12,400</p>
          </div>
        </div>

        <div className="table-container">
          <h2>Latest Courses</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Instructor</th>
                <th>Students</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.instructor || "—"}</td>
                  <td>{course.students || 0}</td>
                  <td className="active-status">Active</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
