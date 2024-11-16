import {createSlice} from "@reduxjs/toolkit";

export interface ICourse {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    department: string;
    credits: number;
    description: string;
}


interface InitialStateProps {
    joinedCoursesIds: Record<string, string[]>;
    showAllCourses: boolean;
}

const initialState: InitialStateProps = {
    joinedCoursesIds: {},
    showAllCourses: false
};


const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        toggleShowAllCourses: (state) => {
            state.showAllCourses = !state.showAllCourses;
        },
        enrollCourse: (state, {payload}) => {
            const {userId, courseId} = payload;
            let temp = state.joinedCoursesIds;
            if (temp[userId]) {
                temp[userId]!.push(courseId);
            } else {
                temp[userId] = [courseId];
            }
            state.joinedCoursesIds = temp;

        },
        unEnrollCourse: (state, {payload}) => {
            const {userId, courseId} = payload;
            let temp = state.joinedCoursesIds;
            if (temp[userId]) {
                temp[userId] = temp[userId]!.filter((id) => id !== courseId);
            }
            state.joinedCoursesIds = temp;
        }
    }
});


export const {toggleShowAllCourses, enrollCourse, unEnrollCourse} = courseSlice.actions;

export default courseSlice.reducer;