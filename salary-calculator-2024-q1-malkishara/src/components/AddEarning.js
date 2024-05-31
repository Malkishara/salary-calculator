import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/AddEarnings.css';
import deleteIcon from '../assets/delete.png'


export default function AddEarning({ id, text, amount, epfEpfIncluded, onTextChange, onAmountChange, onCheckboxChange, onDelete }) {
  return (
    <div className="add-earn">
    
          <Form.Control className="text-field" type="text" placeholder="Title" value={text} onChange={(event) => onTextChange(event.target.value)}/>
          <Form.Control className="ammount-field" type="number" placeholder="Amount" value={amount}  onChange={(event) => onAmountChange(event.target.value)}/>
          <Button className="btn-delete" onClick={onDelete}> 
          <img src={deleteIcon} alt="Delete" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
          </Button>
          <Form.Check className="check-box" type="checkbox"  checked={epfEpfIncluded} onChange={(event) => onCheckboxChange(event.target.checked)}/>
          <Form.Label className="label">EPF/ETF</Form.Label>
       
      
    </div>
  );
}
