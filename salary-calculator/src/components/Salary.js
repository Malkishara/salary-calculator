import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import '../styles/Salary.css';

export default function Salary({ salary, deductions, earnings, earningInputs }) {
  
  salary = parseFloat(salary) || 0;
  
  const totalDeductions = deductions ? deductions.reduce((acc, deduction) => acc + Number(deduction.amount), 0) : 0;
  const totalEarnings = earnings ? earnings.reduce((acc, earning) => acc + Number(earning.amount), 0) : 0;

  const includedEarnings = earningInputs
    .filter(earning => earning.epfEpfIncluded)
    .reduce((acc, earning) => acc + Number(earning.amount), 0);

  const totalEarningsWithSalary = salary + totalEarnings;
  const grossEarnings = totalEarningsWithSalary-totalDeductions;
  const employeeEPF = (salary + includedEarnings - totalDeductions) * 0.08;
  const employerEPF = (salary + includedEarnings-totalDeductions) * 0.12;
  const employerETF = (salary + includedEarnings-totalDeductions) * 0.03;

  const calculateAPIT = (grossEarnings) => {
    
    if (grossEarnings <= 100000) {
      return 0;
    } else if (grossEarnings <= 141667) {
      
      return 0.06 * grossEarnings - 6000;
    } else if (grossEarnings <= 183333) {
      
      return 0.12 * grossEarnings - 14500;
    } else if (grossEarnings <= 225000) {
      return 0.18 * grossEarnings - 25500;
    } else if (grossEarnings <= 266667) {
      return 0.24 * grossEarnings - 39000;
    } else if (grossEarnings <= 308333) {
      return 0.30 * grossEarnings - 55000;
    } else {
      return 0.36 * grossEarnings - 73500;
    }
  };

  const APIT = calculateAPIT(grossEarnings);
  const netSalary = grossEarnings - employeeEPF - APIT;
  const ctc = grossEarnings + employerEPF + employerETF;

  return (
    <div>
      <>
        <h4>Your Salary</h4>
        <div className="salary">
        <Row>
            <Col className="left">Items</Col>
            <Col className="right">Amount</Col>
          </Row>
          <Row>
            <Col className="left-part">Basic Salary</Col>
            <Col className="right-part">{salary.toFixed(2)}</Col>
          </Row>
          <Row>
            <Col className="left-part">Gross Earning</Col>
            <Col className="right-part">{totalEarningsWithSalary.toFixed(2)}</Col>
          </Row>
          <Row>
            <Col className="left-part">Gross Deduction</Col>
            <Col className="right-part">- {totalDeductions.toFixed(2)}</Col>
          </Row>
          <Row>
            <Col className="left-part">Employee EPF (8%)</Col>
            <Col className="right-part">- {employeeEPF.toFixed(2)}</Col>
          </Row>
          <Row>
            <Col className="left-part">APIT</Col>
            <Col className="right-part">- {APIT.toFixed(2)}</Col>
          </Row>

        </div>
        <div className="net-salary">
        <Row>
            <Col className="left-part"><b>Net salary (take home)</b></Col>
            <Col className="right-part"><b>{netSalary.toFixed(2)}</b></Col>
          </Row>
        </div>
        <div className="epf-etf">
        <Row>
            <Col className="left">Contribution from the Employer</Col>
            
          </Row>
          <Row>
            <Col className="left-part">Employer EPF (12%)</Col>
            <Col className="right-part">{employerEPF.toFixed(2)}</Col>
          </Row>
          <Row>
            <Col className="left-part">Employer ETF (3%)</Col>
            <Col className="right-part">{employerETF.toFixed(2)}</Col>
          </Row>
        </div>
        <div className="ctc">
        <Row>
            <Col className="left-part">CTC (Cost to Company)</Col>
            <Col className="right-part">{ctc.toFixed(2)}</Col>
          </Row>
        </div>
      </>
    </div>
  );
}
