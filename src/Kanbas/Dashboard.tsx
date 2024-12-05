import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
// import * as db from "./Database";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  enrollCourse,
  unenrollCourse,
  setEnrollments,
} from "./enrollmentReducer";
import * as userClient from "./Account/client";
import * as coursesClient from "./Courses/client";

export default function Dashboard({
  courses,
  course,
  setCourse,
  //addNewCourse,
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
  //const { enrollments = [] } = useSelector(
   // (state: any) => state.enrollmentReducer
  //); // Access enrollments from Redux
  const [enrollments, setEnrollments] = useState<any[]>([]); // Define enrollments state

  
  const [showAllCourses, setShowAllCourses] = useState(false); // Toggle between enrolled and all courses
  const dispatch = useDispatch();
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState<any[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await coursesClient.fetchAllCourses();
        setAllCourses(response);
      } catch (error) {
        console.error("Failed to fetch all courses:", error);
      }
    };

    fetchCourses();
    fetchEnrolledCourses(); // Fetch enrolled courses as before
  }, [currentUser]);

  const fetchEnrolledCourses = async () => {
    console.log("Fetching enrolled courses");
    try {
      const enrolledCourses = await coursesClient.fetchEnrollmentsForUser(currentUser._id); // Backend API to fetch enrolled courses
      console.log("Enrolled courses fetched:", enrolledCourses);
  
      const updatedEnrollments = enrolledCourses.map((course: any) => ({
       // _id: course._id,
        user: currentUser._id,
        course: course._id,
      }));
  
      setEnrollments(updatedEnrollments); // Update local enrollments state
      console.log("Enrollments:", enrollments);
  
      const updatedCourses = enrolledCourses.map((course: any) => ({
        ...course,
        isEnrolled: true,
      }));
      setFilteredCourses(updatedCourses);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };
  

  const addNewCourse = async () => {
    try {
      const newCourse = await userClient.createCourse(course);
      setCourse({
        _id: "",
        name: "",
        number: "",
        startDate: "",
        endDate: "",
        image: "reactjs.jpg",
        description: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Role checks
  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  // Toggle enrollment view
  const enrollmentViewToggle = () => {
    setShowAllCourses(!showAllCourses);
  };

  const isEnrolled = (courseId: string) => {
    const enrolled = enrollments.some(
      (enrollment: { course: string }) => enrollment.course === courseId
    );
    return enrolled;
  };
  

  // Enroll or Unenroll in a course
  const handleEnroll = async (
    courseId: string,
    action: "enroll" | "unenroll"
  ) => {
    console.log(
      `handleEnroll triggered for courseId: ${courseId}, action: ${action}`
    );
  
    try {
      if (action === "unenroll") {
        console.log("Attempting to unenroll");
        await coursesClient.unenrollFromCourse(currentUser._id, courseId);
        console.log("Successfully unenrolled");
      } else if (action === "enroll") {
        console.log("Attempting to enroll");
        await coursesClient.enrollInCourse(currentUser._id, courseId);
        console.log("Successfully enrolled");
      }
  
      // Refresh enrolled courses after the action
      fetchEnrolledCourses();
    } catch (error) {
      console.error(`Error during ${action}:`, error);
      alert(`Failed to ${action} in the course. Please try again.`);
    }
  };
  



  const displayedCourses = showAllCourses ? allCourses : filteredCourses;

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              onClick={addNewCourse}
              id="wd-add-new-course-click"
            >
              {" "}
              Add{" "}
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
          {displayedCourses
            .filter(
              (course) => isFaculty || showAllCourses || isEnrolled(course._id)
            )

            .map((course) => {
              //console.log("Rendering course card for:", course._id);
              return (
                <div
                  key={course._id}
                  className="col"
                  style={{ width: "300px" }}
                >
                  <div className="card rounded-3 overflow-hidden">
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
                          {/* Show Unenroll button only when showAllCourses is true */}
                          {showAllCourses && isEnrolled(course._id) && (
                            <button
                              className="btn btn-danger float-end me-2"
                              onClick={(event) => {
                                console.log(
                                  "Unenroll button clicked for course:",
                                  course._id
                                );
                                event.preventDefault();
                                handleEnroll(course._id, "unenroll");
                              }}
                            >
                              Unenroll
                            </button>
                          )}

                          {/* Show Enroll button only when showAllCourses is true */}
                          {showAllCourses && !isEnrolled(course._id) && (
                            <button
                              className="btn btn-success float-end me-2"
                              onClick={(event) => {
                                console.log(
                                  "Enroll button clicked for course:",
                                  course._id
                                );
                                event.preventDefault();
                                handleEnroll(course._id, "enroll");
                              }}
                            >
                              Enroll
                            </button>
                          )}

                          {/* Navigation button */}
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
              );
            })}
        </div>
      </div>
    </div>
  );
}
