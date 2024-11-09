import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import PeopleTable from "./People/Table";
import { Navigate, Route, Routes, useParams, useLocation, useNavigate } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";
import * as db from "../Database";
export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [assignments, setAssignments] = useState<any[]>(db.assignments);
  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDescription, setAssignmentDescription] = useState("");
  const [assignmentPoints, setAssignmentPoints] = useState(100);
  const [assignmentDueDate, setAssignmentDueDate] = useState("");
  const [availableFromDate, setAvailableFromDate] = useState("");
  const [availableUntilDate, setAvailableUntilDate] = useState("");
  const addAssignment = () => {
    setAssignments([
      ...assignments,
      {
        _id: new Date().getTime().toString(),
        title: assignmentName,
        course: cid,
        description: assignmentDescription,
        points: assignmentPoints,
        dueDate: assignmentDueDate,
        availableFromDate: availableFromDate,
        availableUntilDate: availableUntilDate,
      },
    ]);
  }
  const updateAssignment = (aid: string) => {
    setAssignments(assignments.map((assignment) =>
      assignment._id === aid
        ? {
            ...assignment,
            title: assignmentName,
            description: assignmentDescription,
            points: assignmentPoints,
            due_time: assignmentDueDate,
            start_time: availableFromDate,
            availableUntilDate: availableUntilDate,
          }
        : assignment
    ));
    resetFields();
  };

  const resetFields = () => {
    setAssignmentName("");
    setAssignmentDescription("");
    setAssignmentPoints(100);
    setAssignmentDueDate("");
    setAvailableFromDate("");
    setAvailableUntilDate("");
  };

  const handleEditAssignment = (assignmentId: string) => {
    // Navigate to the AssignmentEditor with the assignment ID for editing
    navigate(`/Kanbas/Courses/${cid}/Assignments/${assignmentId}/edit`);
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
      
            <Route path="Assignments/:aid/edit" element={<AssignmentEditor 
            assignmentName={assignmentName}
        setAssignmentName={setAssignmentName}
        assignmentDescription={assignmentDescription}
        setAssignmentDescription={setAssignmentDescription}
        assignmentPoints={assignmentPoints}
        setAssignmentPoints={setAssignmentPoints}
        assignmentDueDate={assignmentDueDate}
        setAssignmentDueDate={setAssignmentDueDate}
        availableFromDate={availableFromDate}
        setAvailableFromDate={setAvailableFromDate}
        availableUntilDate={availableUntilDate}
        setAvailableUntilDate={setAvailableUntilDate}
        addAssignment={addAssignment}
        updateAssignment={updateAssignment}/>} />
        <Route path="Assignments/:aid/edit" element={<AssignmentEditor  assignmentName={assignmentName}
        setAssignmentName={setAssignmentName}
        assignmentDescription={assignmentDescription}
        setAssignmentDescription={setAssignmentDescription}
        assignmentPoints={assignmentPoints}
        setAssignmentPoints={setAssignmentPoints}
        assignmentDueDate={assignmentDueDate}
        setAssignmentDueDate={setAssignmentDueDate}
        availableFromDate={availableFromDate}
        setAvailableFromDate={setAvailableFromDate}
        availableUntilDate={availableUntilDate}
        setAvailableUntilDate={setAvailableUntilDate}
        addAssignment={addAssignment}
        updateAssignment={updateAssignment}
        />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
