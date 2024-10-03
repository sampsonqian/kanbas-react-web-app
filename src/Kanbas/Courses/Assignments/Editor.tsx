import React from 'react';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name"><b>Assignment Name</b></label>
        <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="wd-description"><b>Description</b></label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={5}
          value="The assignment is available online Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignment"
        />
      </div>

      {/* Points */}
      <div className="row mb-3">
        <div className="col-md-2 text-end">
          <label htmlFor="wd-points"><b>Points</b></label>
        </div>
        <div className="col-md-10">
          <input id="wd-points" type="number" className="form-control" value={100} />
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-3">
        <div className="col-md-2 text-end">
          <label htmlFor="wd-group"><b>Assignment Group</b></label>
        </div>
        <div className="col-md-10">
          <select id="wd-group" className="form-control">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="PROJECT">PROJECT</option>
            <option value="EXAM">EXAM</option>
          </select>
        </div>
      </div>

      {/* Display Grade As */}
      <div className="row mb-3">
        <div className="col-md-2 text-end">
          <label htmlFor="wd-display-grade-as"><b>Display Grade as</b></label>
        </div>
        <div className="col-md-10">
          <select id="wd-display-grade-as" className="form-control">
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
            <option value="LETTER">Letter</option>
          </select>
        </div>
      </div>

      {/* Submission Type */}
      <div className="row mb-3">
        <div className="col-md-2 text-end">
          <label htmlFor="wd-submission-type"><b>Submission Type</b></label>
        </div>
        <div className="col-md-10">
          <select id="wd-submission-type" className="form-control">
            <option value="ONLINE">Online</option>
            <option value="IN PERSON">In Person</option>
          </select>
        </div>
      </div>

      {/* Group: Assign to, Due, Available from, Until */}
      <div className="row mb-3">
        <div className="col-md-2 text-end">
          <label htmlFor="wd-assign-to"><b>Assign</b></label>
        </div>
        <div className="col-md-10 border p-3">
          <div>
            <label htmlFor="wd-assign-to"><b>Assign to</b></label>
            <input id="wd-assign-to" className="form-control" value="Everyone" />
          </div>

          <div className="mt-3">
            <label htmlFor="wd-due-date"><b>Due</b></label>
            <input type="date" id="wd-due-date" className="form-control" value="2025-05-13" />
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="wd-available-from"><b>Available from</b></label>
              <input type="date" id="wd-available-from" className="form-control" value="2024-05-26" />
            </div>
            <div className="col-md-6">
              <label htmlFor="wd-available-until"><b>Until</b></label>
              <input type="date" id="wd-available-until" className="form-control" value="2024-05-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Save and Cancel buttons */}
      <div className="row">
        <div className="col-md-12">
          <hr />
          <div className="float-end">
            <button className="btn btn-secondary me-2">Cancel</button>
            <button className="btn btn-danger">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
