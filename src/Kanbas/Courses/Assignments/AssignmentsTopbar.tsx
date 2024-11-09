import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import AssignmentEditor from "./AssignmentEditor";

export default function AssignmentsTopbar({
  assignmentFields,
  setAssignmentField,
  addAssignment,
  updateAssignment,
}: {
  assignmentFields: {
    title: string;
    description: string;
    points: number;
    dueDate: string;
    availableFromDate: string;
    availableUntilDate: string;
  };
  setAssignmentField: (field: string, value: any) => void;
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
        assignmentFields={assignmentFields}
        setAssignmentField={setAssignmentField}
        addAssignment={addAssignment}
        updateAssignment={updateAssignment}
      />
    </div>
  );
}
