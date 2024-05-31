import React from "react";
import { connect } from "react-redux";
import Form from 'react-bootstrap/Form';
import { enterBasicSalary } from "../redux/actions/basicSalaryActions";
import '../styles/EnterBasicSalary.css';

const AddSalary = ({ enterBasicSalary }) => {
  

  const handleSalaryChange = (event) => {
    const newSalary = Number(event.target.value);
    enterBasicSalary(newSalary);
  };

  return (
    <div>
      <>
      <Form.Group className="mb-3">
        <Form.Label >Basic Salary</Form.Label>
        <Form.Control className="text" type="number" placeholder="Enter Basic Salary"  onChange={handleSalaryChange} />
      </Form.Group>
      </>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  enterBasicSalary: (newSalary) => dispatch(enterBasicSalary(newSalary)),
});

export default connect(null, mapDispatchToProps)(AddSalary);
