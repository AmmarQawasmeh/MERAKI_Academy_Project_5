import React from "react";
import "./Content.css";
import { useNavigate } from "react-router-dom";


const courses = [
  {
    id: 1,
    title: "Introduction",
    content:
      "Welcome to [Platform Name] e-learning platform. By using this platform, you agree to comply with these terms and conditions."
  },
  {
    id: 2,
    title: "Platform Usage",
    content: [
      "The platform is intended for educational purposes only.",
      "Using the platform for illegal activities is strictly prohibited.",
      "Users are responsible for maintaining the confidentiality of their accounts."
    ]
  },
  {
    id: 3,
    title: "Account Registration",
    content: [
      "Users must provide accurate and complete information during registration.",
      "The platform reserves the right to suspend or delete any account that violates the rules."
    ]
  },
  {
    id: 4,
    title: "Educational Content",
    content:
      "All courses, videos, and learning materials are protected by intellectual property rights and may not be copied or redistributed without permission."
  },
  {
    id: 5,
    title: "Payments & Subscriptions",
    content:
      "All payments are non-refundable unless otherwise stated by the platform administration."
  },
  {
    id: 6,
    title: "User Conduct",
    content:
      "Abusive behavior, harassment, or posting inappropriate content is prohibited and may result in permanent account suspension."
  },
  {
    id: 7,
    title: "Disclaimer",
    content:
      "The platform does not guarantee specific learning outcomes. Content is provided as-is."
  },
  {
    id: 8,
    title: "Terms Updates",
    content:
      "The platform reserves the right to update these terms at any time. Users will be notified of any changes."
  },
  {
    id: 9,
    title: "Contact Us",
    content:
      "For any inquiries regarding these terms, please contact us through the Contact Us page."
  }
];

function Content() {
      const navigate = useNavigate();

  return (
    <div className="content-container">
      <section className="hero1">
        <h1>Welcome to E-Learning Platform</h1>
        <p>Discover thousands of courses and enhance your skills today!</p>
        <button className="btn-cta" onClick={(()=>{
            navigate("/courses")
        })}>Get Started</button>
      </section>

      <section className="courses-section">
        <h2>Inquiries page :</h2>
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
              </div>
              <div className="course-info">
                <h3>{course.title} :</h3>
                <p className="p-inst">Instructor: {course.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured">
        <h2>Featured Courses</h2>
      </section>
    </div>
  );
}

export default Content;
