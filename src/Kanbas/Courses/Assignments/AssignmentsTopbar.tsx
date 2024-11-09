import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import AssignmentEditor from "./AssignmentEditor";
export default function AssignmentsTopbar({
  assignmentName,
  setAssignmentName,
  assignmentDescription,
  setAssignmentDescription,
  assignmentPoints,
  setAssignmentPoints,
  assignmentDueDate,
  setAssignmentDueDate,
  availableFromDate,
  setAvailableFromDate,
  availableUntilDate,
  setAvailableUntilDate,
  addAssignment,
  updateAssignment,
}: {
  assignmentName: string;
  setAssignmentName: (name: string) => void;
  assignmentDescription: string;
  setAssignmentDescription: (description: string) => void;
  assignmentPoints: number;
  setAssignmentPoints: (points: number) => void;
  assignmentDueDate: string;
  setAssignmentDueDate: (date: string) => void;
  availableFromDate: string;
  setAvailableFromDate: (date: string) => void;
  availableUntilDate: string;
  setAvailableUntilDate: (date: string) => void;
  addAssignment: () => void;
  updateAssignment: (aid: string) => void;
}) {
  

  return (
    <div id="wd-assignments-topbar" className="text-nowrap">
      <div className="btn btn-lg me-1 float-start border">
        <CiSearch
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        <input
          id="wd-search-assignment"
          placeholder="Search..."
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}
        />
      </div>

      <button
        id="wd-view-progress"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <button
        id="wd-collapse-all"
        className="btn btn-lg btn-danger me-1 float-end"
        data-bs-toggle="modal"
        data-bs-target="#wd-add-assignment-dialog"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <AssignmentEditor
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
    </div>
  );
}
