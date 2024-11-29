import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, toggleAddAssignmentPanel } from './reducer';
import { useParams } from 'react-router-dom';
import * as coursesClient from "../client";

interface IAssignment {
  _id: string;
  title: string;
  description: string;
  points: string;
  dueDate: string;
  availableFromDate: string;
  availableUntilDate: string;
  course: string;
  modules: string;
}

interface AddAssignmentProps {}

const AddAssignmentPanel: React.FC<AddAssignmentProps> = () => {
  const dispatch = useDispatch();
  const { cid } = useParams<{ cid: string }>();
  const formRef = React.useRef<HTMLFormElement>(null);
  const showAddAssignmentPanel = useSelector(
    (state: any) => state.assignmentsReducer.showAddAssignmentPanel
  );

  const handleClose = () => {
    dispatch(toggleAddAssignmentPanel(false));
  };

  const createAssignmentForCourse = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!cid || !formRef.current) return;
  
    const formData = new FormData(formRef.current);
  
    const validDate = (date: string | null) => (date ? new Date(date).toISOString() : "");
  
    const newAssignment: IAssignment = {
      _id: new Date().getTime().toString(),
      title: formData.get('assignmentName') as string,
      description: formData.get('description') as string,
      points: formData.get('points') as string,
      dueDate: validDate(formData.get('dueDate') as string), // Validate date
      availableFromDate: validDate(formData.get('availableFrom') as string), // Validate date
      availableUntilDate: validDate(formData.get('until') as string), // Validate date
      modules: 'M101',
      course: cid as string,
    };
  
    try {
      const assignment = await coursesClient.createAssignmentsForCourse(cid, newAssignment);
  
      dispatch(addAssignment(assignment));
      dispatch(toggleAddAssignmentPanel(false));
    } catch (error) {
      console.error("Failed to create assignment:", error);
      alert("Failed to create assignment. Please try again.");
    }
  };
  
  return (
    <Modal show={showAddAssignmentPanel} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Assignment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form ref={formRef} onSubmit={createAssignmentForCourse}>
          {/* Assignment Name */}
          <Row className="mb-3">
            <Col xs={12}>
              <label htmlFor="assignmentName">
                <b>Assignment Name</b>
              </label>
              <input
                id="assignmentName"
                name="assignmentName"
                type="text"
                className="form-control"
                placeholder="New Assignment"
                required
              />
            </Col>
          </Row>

          {/* Description */}
          <Row className="mb-3">
            <Col xs={12}>
              <label htmlFor="description">
                <b>Description</b>
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="form-control"
                placeholder="New Assignment Description"
                required
              />
            </Col>
          </Row>

          {/* Points */}
          <Row className="mb-3">
            <Col xs={2}>
              <label htmlFor="points">
                <b>Points</b>
              </label>
            </Col>
            <Col xs={10}>
              <input
                id="points"
                name="points"
                type="number"
                className="form-control"
                defaultValue={100}
              />
            </Col>
          </Row>

          {/* Assign Section */}
          <h5 className="mt-4">Assign</h5>

          {/* Due Date */}
          <Row className="mb-3">
            <Col xs={2}>
              <label htmlFor="dueDate">
                <b>Due</b>
              </label>
            </Col>
            <Col xs={10}>
              <input
                id="dueDate"
                name="dueDate"
                type="datetime-local"
                className="form-control"
                required
              />
            </Col>
          </Row>

          {/* Available From and Until */}
          <Row className="mb-3">
            <Col xs={6}>
              <label htmlFor="availableFrom">
                <b>Available From</b>
              </label>
              <input
                id="availableFrom"
                name="availableFrom"
                type="datetime-local"
                className="form-control"
                required
              />
            </Col>
            <Col xs={6}>
              <label htmlFor="until">
                <b>Until</b>
              </label>
              <input
                id="until"
                name="until"
                type="datetime-local"
                className="form-control"
                required
              />
            </Col>
          </Row>

          {/* Buttons */}
          <Row className="mt-4">
            <Col className="d-flex justify-content-end gap-3">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="danger">
                Save
              </Button>
            </Col>
          </Row>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddAssignmentPanel;
