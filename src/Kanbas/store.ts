import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "./Courses/Assignments/reducer";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";

const store = configureStore({
  reducer: {
    assignmentsReducer,
    modulesReducer,
    accountReducer,
  
  },
});


export default store;

