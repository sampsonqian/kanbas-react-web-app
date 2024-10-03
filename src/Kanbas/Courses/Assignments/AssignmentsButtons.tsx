import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentsButtons() {
  return (
    <div className="float-end">
      <button
        id="wd-assignments-title"
        className="btn btn-lg btn-40PercentOfTotal rounded-pill me-1 fs-6"
      >
        40% of Total
      </button>
      <BsPlus className="fs-4"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}