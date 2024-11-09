import AssignmentsTopbar from "./AssignmentsTopbar";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsButtons from "./AssignmentsButtons";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { MdOutlineAssignment } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as db from "../../Database";
import { useState } from "react";

export default function Assignments() {
  const {aid, cid } = useParams();
  const navigate = useNavigate();

  const [assignments, setAssignments] = useState<any[]>(db.assignments);
  const [assignmentFields, setAssignmentFields] = useState({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  });

  // Update a specific field within the assignmentFields object
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

  const deleteAssignment = (assignmentId: string) => {
    setAssignments(assignments.filter((a) => a._id !== assignmentId));
  };

  const handleEditAssignment = (assignmentId: string) => {
    console.log("Navigating to assignment with ID:", assignmentId); 
    navigate(`/Kanbas/Courses/${cid}/Assignments/${assignmentId}/edit`);
  };

  return (
    <div id="wd-assignments">
      <AssignmentsTopbar
        assignmentFields={assignmentFields}
        setAssignmentField={setAssignmentField}
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
             
              <ul key={assignment._id} className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-3 fs-3 text-success" />
                    <div>
                    <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}/edit`}
                        onClick={() => console.log("Clicked assignment ID:", assignment._id)}
                        className="wd-assignment-link text-black fw-bold"
                        style={{ textDecoration: "none" }}
                      >
                        {assignment.title}
                      </Link>
                      <br />
                      <div className="fs-6">
                        <span className="text-danger fs-6">
                          {assignment.modules}
                        </span>{" "}
                        | <b>Not available until</b>{" "}
                        {assignment.availableFromDate} |
                        <br />
                        <b>Due</b> {assignment.dueDate} | {assignment.points} pts
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
