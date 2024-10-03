import AssignmentsTopbar from "./AssignmentsTopbar";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsButtons from "./AssignmentsButtons";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { MdOutlineAssignment } from "react-icons/md";
export default function Assignments() {
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
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                <div>
                  <a
                    className="wd-assignment-link text-black fw-bold"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                    style={{ textDecoration: "none" }}
                  >
                    A1
                  </a>
                  <br />
                  <div className="fs-6">
                    <span className="text-danger fs-6">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 6 at 12:00am |
                    <br />
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div>
                <AssignmentControlButtons />
              </div>
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                <div>
                  <a
                    className="wd-assignment-link text-black fw-bold"
                    href="#/Kanbas/Courses/1234/Assignments/124"
                    style={{ textDecoration: "none" }}
                  >
                    A2
                  </a>
                  <br />
                  <div className="fs-6">
                    <span className="text-danger fs-6">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 13 at 12:00am |
                    <br />
                    <b>Due</b> May 20 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>

              <div>
                <AssignmentControlButtons />
              </div>
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              {/* Left section: Icons and Text */}
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                <div>
                  <a
                    className="wd-assignment-link text-black fw-bold"
                    href="#/Kanbas/Courses/1234/Assignments/125"
                    style={{ textDecoration: "none" }}
                  >
                    A3
                  </a>
                  <br />
                  <div className="fs-6">
                    <span className="text-danger fs-6">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 20 at 12:00am |
                    <br />
                    <b>Due</b> May 27 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>

              <div>
                <AssignmentControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
