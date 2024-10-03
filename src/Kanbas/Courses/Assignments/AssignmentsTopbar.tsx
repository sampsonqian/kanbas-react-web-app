import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
export default function AssignmentsTopbar() {
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
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
    </div>
  );
}
