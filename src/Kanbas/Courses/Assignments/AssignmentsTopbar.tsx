import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import AssignmentEditor from "./AssignmentEditor";
import {useDispatch} from "react-redux";
import {setSearchQuery, toggleAddAssignmentPanel} from "./reducer";

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

  const dispatch = useDispatch();


  const handleClickOpenAddAssignment = () => {
      dispatch(toggleAddAssignmentPanel(true));
  }

  return (
    <div id="wd-assignments-topbar" className="text-nowrap">




      <div className="btn btn-lg me-1 float-start border">
        <CiSearch
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        <input
            onChange={(e: any) => {
                dispatch(setSearchQuery(e.target.value));
            }}
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
          onClick={() => {
              handleClickOpenAddAssignment();
          }}
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

    </div>
  );
}
