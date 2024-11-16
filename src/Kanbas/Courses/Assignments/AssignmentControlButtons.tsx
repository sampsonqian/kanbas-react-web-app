import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash, FaEdit } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import React, { useState } from "react";
export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
  editAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
    editAssignment: (assignmentId: string) => void;
}) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDelete = () => {
    deleteAssignment(assignmentId);
    setShowDeleteDialog(false); // Close the dialog after deletion
  };

  const handleEdit = () => {
    editAssignment(assignmentId);
  }

  return (
    <div className="float-end">
        <FaEdit
            onClick={handleEdit}
            className="text-primary me-2 mb-1" />
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => setShowDeleteDialog(true)}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div
          id="delete-confirmation-dialog"
          className="modal fade show d-block"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="deleteDialogLabel"
          aria-modal="true"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteDialogLabel">
                  Delete Assignment
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowDeleteDialog(false)}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this assignment? This action
                cannot be undone.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteDialog(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
