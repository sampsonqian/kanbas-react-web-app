import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "./Courses/Assignments/reducer";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import courseReducer from './Courses/reducer';
import enrollmentReducer from "./enrollmentReducer";

const store = configureStore({
  reducer: {
    assignmentsReducer,
    modulesReducer,
    accountReducer,
    courseReducer,
    enrollmentReducer
  },
});


export default store;

