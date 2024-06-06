import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import deleteIcon from '../assets/delete.png'
import '../styles/AddDeduction.css'


const AddDeduction = ({ id, text, amount, onTextChange, onAmountChange, onDelete }) => {
  return (
    <div className="add-deduction">
    
    <Form.Control className="text-field" type="text" placeholder="Title" value={text} onChange={(event) => onTextChange(event.target.value)}/>
    <Form.Control className="ammount-field" type="number" placeholder="Amount" value={amount}  onChange={(event) => onAmountChange(event.target.value)}/>
    <Button className="btn-delete" onClick={onDelete}> 
    <img src={deleteIcon} alt="Delete" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
    </Button>
    
 

</div>
  );
};

export default AddDeduction;
