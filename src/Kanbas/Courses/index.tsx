import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import PeopleTable from "./People/Table";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";
import * as db from "../Database";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  const [assignments, setAssignments] = useState<any[]>(db.assignments);
  const [assignmentFields, setAssignmentFields] = useState({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  });

  // Function to update a specific field in assignmentFields
  const setAssignmentField = (field: string, value: any) => {
    setAssignmentFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const addAssignment = () => {
    const newAssignment = {
      _id: new Date().getTime().toString(),
      course: cid,
      ...assignmentFields,
    };
    setAssignments([...assignments, newAssignment]);
    resetFields();
  };

  const updateAssignment = (aid: string) => {
    setAssignments(
      assignments.map((assignment) =>
        assignment._id === aid ? { ...assignment, ...assignmentFields } : assignment
      )
    );
    resetFields();
  };

  const resetFields = () => {
    setAssignmentFields({
      title: "",
      description: "",
      points: 100,
      dueDate: "",
      availableFromDate: "",
      availableUntilDate: "",
    });
  };

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />

            <Route
              path="Courses/:cid/Assignments/:aid/edit"
              element={
                <AssignmentEditor
                  assignmentFields={assignmentFields}
                  setAssignmentField={setAssignmentField}
                  addAssignment={addAssignment}
                  updateAssignment={updateAssignment}
                />
              }
            />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
