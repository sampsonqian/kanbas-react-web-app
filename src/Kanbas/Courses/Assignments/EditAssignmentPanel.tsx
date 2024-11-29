import React, { useEffect } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEditingAssignment,
  toggleEditAssignmentPanel,
  updateAssignment,
} from './reducer';
import { useParams } from 'react-router-dom';
import * as assignmentsClient from "./client";

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

interface EditAssignmentProps {}

const EditAssignmentPanel: React.FC<EditAssignmentProps> = () => {
  const dispatch = useDispatch();
  const editingAssignment: IAssignment = useSelector(
    (state: any) => state.assignmentsReducer.editingAssignment
  );
  const { cid } = useParams<{ cid: string }>();
  const [formData, setFormData] = React.useState<IAssignment>({
    _id: '',
    title: '',
    description: '',
    points: '100',
    dueDate: '',
    availableFromDate: '',
    availableUntilDate: '',
    course: cid || '',
    modules: '',
  });
  const showEditAssignmentPanel = useSelector(
    (state: any) => state.assignmentsReducer.showEditAssignmentPanel
  );

  const handleClose = () => {
    dispatch(toggleEditAssignmentPanel(false));
    dispatch(setEditingAssignment(null));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedAssignment = { ...formData };
    await assignmentsClient.updateAssignment(updatedAssignment);

    dispatch(updateAssignment(updatedAssignment));
    dispatch(toggleEditAssignmentPanel(false));
  };

  useEffect(() => {
    //const validDate = (date: string) =>
     // date ? new Date(date).toISOString().slice(0, 16) : ""; // Default to empty string if invalid
  
    if (editingAssignment) {
      setFormData({
        ...editingAssignment,
        availableFromDate: (editingAssignment.availableFromDate),
        availableUntilDate: (editingAssignment.availableUntilDate),
        dueDate: (editingAssignment.dueDate),
      });
    }
  }, [editingAssignment]);
  

  return (
    <Modal show={showEditAssignmentPanel} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Assignment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          {/* Assignment Name */}
          <Row className="mb-3">
            <Col xs={12}>
              <label htmlFor="assignmentName">
                <b>Assignment Name</b>
              </label>
              <input
                id="assignmentName"
                name="title"
                type="text"
                className="form-control"
                placeholder="Enter assignment name"
                value={formData.title}
                onChange={handleChange}
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
                placeholder="Enter description"
                value={formData.description}
                onChange={handleChange}
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
                value={formData.points}
                onChange={handleChange}
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
                value={formData.dueDate}
                onChange={handleChange}
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
                name="availableFromDate"
                type="datetime-local"
                className="form-control"
                value={formData.availableFromDate}
                onChange={handleChange}
                required
              />
            </Col>
            <Col xs={6}>
              <label htmlFor="until">
                <b>Until</b>
              </label>
              <input
                id="until"
                name="availableUntilDate"
                type="datetime-local"
                className="form-control"
                value={formData.availableUntilDate}
                onChange={handleChange}
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

export default EditAssignmentPanel;
