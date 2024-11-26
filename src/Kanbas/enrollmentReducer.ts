import { createSlice } from "@reduxjs/toolkit";
import { courses as initialCourses, enrollments as initialEnrollments } from "./Database";

const initialState = {
  courses: initialCourses,
  enrollments: initialEnrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
        state.enrollments = action.payload;
      },
    enrollCourse: (state, { payload: { userId, courseId } }) => {
      state.enrollments.push({ _id: new Date().getTime().toString(), user: userId, course: courseId });
    },
    unenrollCourse: (state, action) => {
        state.enrollments = state.enrollments.filter(
          (enrollment) => enrollment._id !== action.payload.enrollmentId
        );
      },
  },
});

export const { setEnrollments, enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;