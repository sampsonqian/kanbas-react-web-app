import AssignmentsTopbar from "./AssignmentsTopbar";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsButtons from "./AssignmentsButtons";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { MdOutlineAssignment } from "react-icons/md";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import {
  addAssignment,
  updateAssignment,
  deleteAssignment,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
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
        due_time: assignmentDueDate,
        availableFromDate: availableFromDate,
        availableUntilDate: availableUntilDate,
      },
    ]);
    resetFields();
  };

  const updateAssignment = (aid: string) => {
    setAssignments(
      assignments.map((assignment) =>
        assignment._id === aid
          ? {
              ...assignment,
              title: assignmentName,
              description: assignmentDescription,
              points: assignmentPoints,
              due_time: assignmentDueDate,
              availableFromDate: availableFromDate,
              availableUntilDate: availableUntilDate,
            }
          : assignment
      )
    );
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

  const deleteAssignment = (assignmentId: string) => {
    setAssignments(assignments.filter((a) => a._id !== assignmentId));
  };

  const handleEditAssignment = (assignmentId: string) => {
    // Navigate to AssignmentEditor with the assignment ID
    navigate(`/Kanbas/Courses/${cid}/Assignments/${assignmentId}/edit`);
  };

  return (
    <div id="wd-assignments">
      <AssignmentsTopbar
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
        updateAssignment={updateAssignment}
      />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary fw-bold">
            <BsGripVertical className="me-2 fs-3" />
            <RxTriangleDown className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentsButtons />
          </div>
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-3 fs-3 text-success" />
                    <div>
                      <span
                        onClick={() => handleEditAssignment(assignment._id)}
                        className="wd-assignment-link text-black fw-bold"
                        style={{ textDecoration: "none", cursor: "pointer" }}
                      >
                        {assignment.title}
                      </span>
                      <br />
                      <div className="fs-6">
                        <span className="text-danger fs-6">
                         { assignment.modules}
                        </span>{" "}
                        | <b>Not available until</b>{" "}
                        {assignment.availableFromDate} |
                        <br />
                        <b>Due</b> {assignment.dueDate} | {assignment.points}{" "}
                        pts
                      </div>
                    </div>
                  </div>
                  <div>
                    <AssignmentControlButtons
                      assignmentId={assignment._id}
                      deleteAssignment={deleteAssignment}
                    />
                  </div>
                </li>
              </ul>
            ))}
        </li>
      </ul>
    </div>
  );
}
