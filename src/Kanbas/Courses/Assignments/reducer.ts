import { createSlice } from "@reduxjs/toolkit";
//import { assignments } from "../../Database";

export interface IAssignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  modules: string;
  availableFromDate: string;
  availableUntilDate: string;
  dueDate: string;
  points: number;
}

export interface IAssignmentsState {
  assignments: IAssignment[];
  showAddAssignmentPanel: boolean;
  showEditAssignmentPanel: boolean;
  editingAssignment: IAssignment | null;
  searchQuery: string;
}

const initialState: IAssignmentsState = {
  assignments: [],
  showAddAssignmentPanel: false,
  showEditAssignmentPanel: false,
  editingAssignment: null,
  searchQuery: "",
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: IAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableFromDate: assignment.availableFromDate,
        availableUntilDate: assignment.availableUntilDate,
        course: assignment.course,
        modules: "",
      };
      console.log(newAssignment);
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    toggleAddAssignmentPanel: (state, { payload }) => {
      state.showAddAssignmentPanel = payload;
    },
    setEditingAssignment: (state, { payload }) => {
      state.editingAssignment = payload;
    },
    toggleEditAssignmentPanel: (state, { payload }) => {
      state.showEditAssignmentPanel = payload;
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
});
export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  setEditingAssignment,
  updateAssignment,
  toggleAddAssignmentPanel,
  toggleEditAssignmentPanel,
  setSearchQuery,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
