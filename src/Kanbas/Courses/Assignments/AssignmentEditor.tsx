import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor({
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
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const navigate = useNavigate();

  // Check if `aid` and `cid` are correctly passed
  console.log("Rendering AssignmentEditor with aid:", aid, "and cid:", cid);

  
  // // Load assignment data if editing an existing assignment
  useEffect(() => {
    if (aid) {
      const assignment = db.assignments.find((a) => a._id === aid);
      if (assignment) {
        setAssignmentField("title", assignment.title);
        setAssignmentField("description", assignment.description);
        setAssignmentField("points", assignment.points);
        setAssignmentField("dueDate", assignment.dueDate);
        setAssignmentField("availableFromDate", assignment.availableFromDate);
        setAssignmentField("availableUntilDate", assignment.availableUntilDate);
      } else {
        console.error("No assignment found with the given aid:", aid);
      }
    }
  }, [aid]);

  const handleSave = () => {
    if (aid) {
      updateAssignment(aid);
    } else {
      addAssignment();
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };


  return (
    <div
      id="wd-add-assignment-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <div id="wd-assignments-editor" className="container mt-4">
              {/* Assignment Name */}
              <div className="mb-3">
                <label htmlFor="wd-name">
                  <b>Assignment Name</b>
                </label>
                <input
                  id="wd-name"
                  className="form-control"
                  value={assignmentFields.title}
                  onChange={(e) => setAssignmentField("title", e.target.value)}
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <label htmlFor="wd-description">
                  <b>Description</b>
                </label>
                <textarea
                  id="wd-description"
                  className="form-control"
                  rows={5}
                  value={assignmentFields.description}
                  onChange={(e) =>
                    setAssignmentField("description", e.target.value)
                  }
                />
              </div>

              {/* Points */}
              <div className="row mb-3">
                <div className="col-md-2 text-end">
                  <label htmlFor="wd-points">
                    <b>Points</b>
                  </label>
                </div>
                <div className="col-md-10">
                  <input
                    id="wd-points"
                    type="number"
                    className="form-control"
                    value={assignmentFields.points}
                    onChange={(e) =>
                      setAssignmentField("points", Number(e.target.value))
                    }
                  />
                </div>
              </div>

              {/* Group: Assign to, Due, Available from, Until */}
              <div className="row mb-3">
                <div className="col-md-2 text-end">
                  <label htmlFor="wd-assign-to">
                    <b>Assign</b>
                  </label>
                </div>

                <div className="mt-3">
                  <label htmlFor="wd-due-date">
                    <b>Due</b>
                  </label>
                  <input
                    type="date"
                    id="wd-due-date"
                    className="form-control"
                    value={assignmentFields.dueDate}
                    onChange={(e) =>
                      setAssignmentField("dueDate", e.target.value)
                    }
                  />
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label htmlFor="wd-available-from">
                      <b>Available from</b>
                    </label>
                    <input
                      type="date"
                      id="wd-available-from"
                      className="form-control"
                      value={assignmentFields.availableFromDate}
                      onChange={(e) =>
                        setAssignmentField("availableFromDate", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="wd-available-until">
                      <b>Until</b>
                    </label>
                    <input
                      type="date"
                      id="wd-available-until"
                      className="form-control"
                      value={assignmentFields.availableUntilDate}
                      onChange={(e) =>
                        setAssignmentField("availableUntilDate", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Save and Cancel buttons */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => navigate(`/Kanbas/Courses/Assignments`)}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-danger"
              >
                Save Assignment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
