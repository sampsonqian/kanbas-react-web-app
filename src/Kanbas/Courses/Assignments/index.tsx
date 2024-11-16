import AssignmentsTopbar from "./AssignmentsTopbar";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsButtons from "./AssignmentsButtons";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { MdOutlineAssignment } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as db from "../../Database";
import { useState } from "react";
import AddAssignmentPanel from "./AddAssignmentPanel";
import { useDispatch, useSelector } from "react-redux";
import assignmentsReducer, {
  deleteAssignment,
  IAssignment,
  setEditingAssignment,
  toggleEditAssignmentPanel,
} from "./reducer";
import EditAssignmentPanel from "./EditAssignmentPanel";

export default function Assignments() {
  const { aid, cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );
  const searchQuery = useSelector(
    (state: any) => state.assignmentsReducer.searchQuery
  );
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

    resetFields();
  };

  const updateAssignment = (aid: string) => {
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

  const handleDeleteAssignment = (assignmentId: string) => {
    dispatch(deleteAssignment(assignmentId));
  };

  const handleEditAssignment = (assignmentId: string) => {
    const assignment = assignments.find((a: any) => a._id === assignmentId);
    if (assignment) {
      dispatch(setEditingAssignment(assignment));
      dispatch(toggleEditAssignmentPanel(true));
    }
  };

  return (
    <div id="wd-assignments">
      <AddAssignmentPanel />

      <EditAssignmentPanel />

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
            .filter((assignment: IAssignment) => assignment.course === cid)
            .filter((assignment: IAssignment) =>
              assignment.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((assignment: any) => (
              <ul
                key={assignment._id}
                className="wd-lessons list-group rounded-0"
              >
                <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-3 fs-3 text-success" />
                    <div onClick={() => handleEditAssignment(assignment._id)}>
                      <span
                        //onClick={() => handleEditAssignment(assignment._id)}
                        className="wd-assignment-link text-black fw-bold cursor-pointer"
                        style={{ textDecoration: "none" }}
                      >
                        {assignment.title}
                      </span>
                      <br />
                      <div className="fs-6">
                        <span className="text-danger fs-6">
                          {assignment.modules}
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
                      editAssignment={handleEditAssignment}
                      assignmentId={assignment._id}
                      deleteAssignment={handleDeleteAssignment}
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
