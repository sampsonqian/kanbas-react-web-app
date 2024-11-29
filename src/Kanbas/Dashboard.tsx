import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  setEnrollments,
  enrollCourse,
  unenrollCourse,
} from "./enrollmentReducer";
import * as coursesClient from "./Courses/client";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments = [] } = useSelector(
    (state: any) => state.enrollmentReducer
  ); // Access enrollments from Redux

  const [showAllCourses, setShowAllCourses] = useState(false); // Toggle between enrolled and all courses
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Role checks
  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  // Fetch enrollments on component mount
  useEffect(() => {
    const fetchEnrollments = async () => {
        
      try {
        const fetchedEnrollments = await coursesClient.fetchEnrollmentsForUser(
          currentUser._id
        );
        
        dispatch(setEnrollments(fetchedEnrollments)); // Populate Redux state with enrollments
      } catch (error) {
        console.error("Failed to fetch enrollments:", error);
      }
    };

    if (currentUser?._id) {
      fetchEnrollments();
    }
  }, [currentUser, dispatch]);

  // Toggle enrollment view
  const enrollmentViewToggle = () => {
    setShowAllCourses(!showAllCourses);
  };

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment: { user: string; course: string }) =>
        enrollment.course === courseId && enrollment.user === currentUser._id
    );

  // Enroll or Unenroll in a course
  const handleEnroll = async (courseId: string) => {
    if (isEnrolled(courseId)) {
      // Unenroll flow
      const enrollment = enrollments.find(
        (enrollment: { user: string; course: string }) =>
          enrollment.course === courseId && enrollment.user === currentUser._id
      );

      if (enrollment) {
        try {
          await coursesClient.unenrollFromCourse(enrollment._id); // Call the API to unenroll
          dispatch(unenrollCourse({ enrollmentId: enrollment._id })); // Dispatch to remove from Redux state
        } catch (error) {
          console.error("Failed to unenroll:", error);
          alert("Failed to unenroll from the course. Please try again.");
        }
      }
    } else {
      // Enroll flow
      try {
        const newEnrollment = await coursesClient.enrollInCourse(
          currentUser._id,
         
          courseId
        ); // Call the API to enroll
        dispatch(enrollCourse(newEnrollment)); // Dispatch to add to Redux state
      } catch (error) {
        console.error("Failed to enroll:", error);
        alert("Failed to enroll in the course. Please try again.");
      }
    }
  };

  // Navigate only if the student is enrolled
  const handleNavigate = (courseId: string) => {
    if (isEnrolled(courseId)) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else {
      alert("You must enroll in this course to access it.");
    }
  };

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>{" "}
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      {isStudent && (
        <button
          className="btn btn-primary float-end"
          onClick={enrollmentViewToggle}
        >
          {showAllCourses ? "My Enrollments" : "All Courses"}
        </button>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div
                className="card rounded-3 overflow-hidden"
                onClick={() => {
                  navigate(`/Kanbas/Courses/${course._id}/Home`);
                }}
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    {course.name}
                  </h5>
                  <p
                    className="wd-dashboard-course-title card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}
                  </p>

                  {isFaculty && (
                    <>
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="btn btn-primary me-2"
                      >
                        Go
                      </Link>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </>
                  )}
                  {isStudent && (
                    <>
                      <button
                        className={`btn ${
                          isEnrolled(course._id) ? "btn-danger" : "btn-success"
                        } float-end me-2`}
                        onClick={(event) => {
                          event.preventDefault();
                          handleEnroll(course._id);
                        }}
                      >
                        {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                      </button>
                      {isEnrolled(course._id) && (
                        <Link
                          to={`/Kanbas/Courses/${course._id}/Home`}
                          className="btn btn-primary me-2"
                        >
                          Go
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
