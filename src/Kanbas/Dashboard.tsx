import React, {useMemo, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as db from "./Database";
import {enrollCourse, toggleShowAllCourses, unEnrollCourse} from "./Courses/reducer";


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
 const isFaculty = currentUser.role === "FACULTY";
 const isStudent = currentUser.role === "STUDENT";
 const showAllCourses = useSelector((state: any) => state.courseReducer.showAllCourses);
 const joinedCoursesIds: Record<string, string[]> = useSelector((state: any) => state.courseReducer.joinedCoursesIds);
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const handleClickEnrollments = () => {
    dispatch(toggleShowAllCourses());
 }

 const handleClickEnroll = (courseId: string) => {
        dispatch(enrollCourse({
            courseId,
            userId: currentUser._id
        }));
 }
 const handleClickUnEnroll = (courseId: string) => {
        dispatch(unEnrollCourse({
            courseId,
            userId: currentUser._id
        }));
 }

 const displayCourses = useMemo(() => {
     if (showAllCourses || isFaculty) {
         return courses;
     }
     const joinedList = joinedCoursesIds[currentUser._id];
     return courses.filter((course) => joinedList?.includes(course._id));

 }, [showAllCourses, courses, joinedCoursesIds, currentUser]);


 return (
   <div id="wd-dashboard">
     <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
     <div>

         <div className={'d-flex justify-content-end'}>
             {isStudent && (
                 <button
                     onClick={handleClickEnrollments}
                     className={'btn btn-primary'}>Enrollments </button>
             )}
         </div>

         {isFaculty && (
             <>
                 <h5>
                     New Course
                     <button
                         className="btn btn-primary float-end"
                         id="wd-add-new-course-click"
                         onClick={addNewCourse}
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
                 </h5>
                 <br/>
                 <input
                     defaultValue={course.name}
                     className="form-control mb-2"
                     onChange={(e) => setCourse({...course, name: e.target.value})}
                 />
                 <textarea
                     defaultValue={course.description}
                     className="form-control"
                     onChange={(e) => setCourse({...course, description: e.target.value})}
                 />
             </>
         )}
     </div>
       <hr/>
       <h2 id="wd-dashboard-published">
           Published Courses ({courses.length})
       </h2>{" "}
       <hr/>
       <div id="wd-dashboard-courses" className="row">

           {displayCourses.length === 0 && isStudent && (
               <div className={'alert alert-warning'}>
                   You have not enrolled in any courses yet.
               </div>
           )}

           <div className="row row-cols-1 row-cols-md-5 g-4">
               {displayCourses
                   .map((course) => {
                       const joinedIds = joinedCoursesIds[currentUser._id];
                       return (
                           <div
                               className="wd-dashboard-course col"
                               style={{width: "300px"}}
                           >
                               <div className="card rounded-3 overflow-hidden">
                                   <span
                                       onClick={() => {
                                           navigate(`/Kanbas/Courses/${course._id}/Home`)
                                       }}
                                       className="wd-dashboard-course-link text-decoration-none text-dark"

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
                                           <div className={'d-flex w-100'}>
                                               <button className="btn btn-primary me-auto"> Go </button>
                                               {isStudent && !joinedIds?.includes(course._id) && (
                                                   <button type={'button'} onClick={(e) => {
                                                       e.stopPropagation();
                                                       handleClickEnroll(course._id);
                                                   }} className={'btn btn-success'}>Enroll</button>

                                               )}

                                               {isStudent && joinedIds?.includes(course._id) && (
                                                   <button type={'button'} onClick={(e) => {
                                                       e.stopPropagation();
                                                       handleClickUnEnroll(course._id);
                                                   }} className={'btn btn-danger'}>Unenroll</button>
                                               )}

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
                                       </div>
                                   </span>
                               </div>
                           </div>
                       )
                   })}
           </div>
       </div>
   </div>
 );
}


