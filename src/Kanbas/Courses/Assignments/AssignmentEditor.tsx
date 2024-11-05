import React from "react";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor({
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
}) {
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
                  value={assignmentName}
                  onChange={(e) => setAssignmentName(e.target.value)}
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
                  value={assignmentDescription}
                  onChange={(e) => setAssignmentDescription(e.target.value)}
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
                    value={assignmentPoints}
                    onChange={(e) =>
                      setAssignmentPoints(Number(e.target.value))
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
                    value={assignmentDueDate}
                    onChange={(e) => setAssignmentDueDate(e.target.value)}
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
                      value={availableFromDate}
                      onChange={(e) => setAvailableFromDate(e.target.value)}
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
                      value={availableUntilDate}
                      onChange={(e) => setAvailableUntilDate(e.target.value)}
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
              >
                Cancel
              </button>
              <button
                onClick={addAssignment}
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
