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
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
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
      const enrolledCourses = await coursesClient.fetchEnrollmentsForUser(
        currentUser._id
      ); // Backend API to fetch enrolled courses
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
      <button
        onClick={() => setEnrolling(!enrolling)}
        className="float-end btn btn-primary"
      >
        {enrolling ? "My Courses" : "All Courses"}
      </button>
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
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={(!enrolling || course.enrolled) ? `/Kanbas/Courses/${course._id}/Home` : '/Kanbas/Dashboard'}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {enrolling && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                          className={`btn ${
                            course.enrolled ? "btn-danger" : "btn-success"
                          } float-end`}
                        >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    {(currentUser.role == "FACULTY" || course.enrolled || !enrolling) && (
                      <button className="btn btn-primary"> Go </button>)
                    }

                    {isFaculty && (
                      <>
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
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
