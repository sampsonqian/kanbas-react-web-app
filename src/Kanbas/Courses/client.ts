import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(COURSES_API, course);
    return data;
   };
   

export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};
export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

export const findModulesForCourse = async (courseId: string) => {
    console.log("findModulesForCourse called with courseId:", courseId);
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
    console.log("findAssignmentsForCourse called with courseId:", courseId);
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};


export const createAssignmentsForCourse = async (
  courseId: string,
  assignment: any
) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

// Enroll a user in a course
export const enrollInCourse = async (userId: string, courseId: string) => {
  console.log(userId);
  const response = await axios.post(`${ENROLLMENTS_API}/${Date.now()}`, {
    userId,
    courseId,
  });
  return response.data; // Return the new enrollment object
};

// Unenroll a user from a course
export const unenrollFromCourse = async (userId: string, courseId: string) => {
    //console.log(enrollmentId);
  const response = await axios.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
  return response.data; // Return the status or any response
};

export const fetchEnrollmentsForUser = async (userId: string) => {
  const response = await axios.get(
    `${REMOTE_SERVER}/api/enrollments/${userId}`
  );
  return response.data;
};


export const findUsersForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/users`);
    return response.data;
   };
   