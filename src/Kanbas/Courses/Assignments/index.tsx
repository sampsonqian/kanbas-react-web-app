import AssignmentsTopbar from "./AssignmentsTopbar";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsButtons from "./AssignmentsButtons";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { MdOutlineAssignment } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <AssignmentsTopbar />
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
                      <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-black fw-bold"
                        style={{ textDecoration: "none" }}
                      >
                        {assignment.title}
                      </Link>
                      <br />
                      <div className="fs-6">
                        <span className="text-danger fs-6">
                          Multiple Modules
                        </span>{" "}
                        | <b>Not available until</b> {assignment.start_time} |
                        <br />
                        <b>Due</b> {assignment.due_time} | {assignment.points}
                      </div>
                    </div>
                  </div>
                  <div>
                    <AssignmentControlButtons />
                  </div>
                </li>
              </ul>
            ))}
        </li>
      </ul>
    </div>
  );
}
