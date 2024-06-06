import React, { Component } from "react";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Salary from "../components/Salary";
import AddDeduction from "../components/AddDeductions";
import EnterBasicSalary from "../components/EnterBasicSalary";
import { addDeduction, deleteDeduction, resetDeductions } from "../redux/actions/deductionActions";
import { enterBasicSalary, resetBasicSalary } from "../redux/actions/basicSalaryActions";
import AddEarning from "../components/AddEarning";
import { addEarning, deleteEarning, resetEarning } from "../redux/actions/earningActions";
import resetIcon from '../assets/reset.png'; 
import addIcon from '../assets/add.png';
import '../styles/Main.css';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deductionInputs: [{ id: 1, text: "", amount: 0 }],
      earningInputs: [{ id: 1, text: "", amount: 0, epfEpfIncluded: false }]
    };
  }

  handleDeductionChange = (index, field, value) => {
    const newDeductionInputs = [...this.state.deductionInputs];
    newDeductionInputs[index][field] = value;
    this.setState({ deductionInputs: newDeductionInputs }, this.updateDeductions);
  };

  addDeductionInput = () => {
    this.setState((prevState) => ({
      deductionInputs: [...prevState.deductionInputs, { id: prevState.deductionInputs.length + 1, text: "", amount: 0 }]
    }));
  };

  deleteDeductionInput = (index) => {
    this.setState(
      (prevState) => ({
        deductionInputs: prevState.deductionInputs.filter((_, i) => i !== index)
      }),
      this.updateDeductions
    );
  };

  updateDeductions = () => {
    const { deductions } = this.props;
    deductions.forEach(deduction => {
      this.props.deleteDeduction(deduction.id);
    });

    this.state.deductionInputs.forEach(deduction => {
      if (deduction.text && deduction.amount) {
        this.props.addDeduction(deduction);
      }
    });
  };

  handleEarningChange = (index, field, value) => {
    const newEarningInputs = [...this.state.earningInputs];
    newEarningInputs[index][field] = value;
    this.setState({ earningInputs: newEarningInputs }, this.updateEarnings);
  };

  addEarningInput = () => {
    this.setState((prevState) => ({
      earningInputs: [...prevState.earningInputs, { id: prevState.earningInputs.length + 1, text: "", amount: 0, epfEpfIncluded: false }]
    }));
  };

  deleteEarningInput = (index) => {
    this.setState(
      (prevState) => ({
        earningInputs: prevState.earningInputs.filter((_, i) => i !== index)
      }),
      this.updateEarnings
    );
  };

  updateEarnings = () => {
    const { earnings } = this.props;
    earnings.forEach(earning => {
      this.props.deleteEarning(earning.id);
    });

    this.state.earningInputs.forEach(earning => {
      if (earning.text && earning.amount) {
        this.props.addEarning(earning);
      }
    });
  };

  //reset form
  resetForm = () => {
    this.props.resetBasicSalary();
    this.props.resetEarning();
    this.props.resetDeductions();
    this.setState({
      deductionInputs: [{ id: 1, text: "", amount: 0 }],
      earningInputs: [{ id: 1, text: "", amount: 0, epfEpfIncluded: false }]
    });
  };
  
  render() {
    const { salary, deductions, enterBasicSalary, earnings } = this.props;

    return (
      <Container className="content">
        <Row>
          <Col sm={7}>
            <Card className="calculator-card">
              <Card.Body>
                <Row>
                  <Col>
                  <h4>Calculate Your Salary</h4>
                  </Col>
                  <Col>
                  <div className="reset-btn-container">
              
                <Button onClick={this.resetForm} className="btn-reset">
                  <img src={resetIcon} alt="Reset" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  Reset Form
                </Button>
                </div>
                  </Col>
                </Row>
                
                <EnterBasicSalary enterBasicSalary={enterBasicSalary} />
                <Form.Group >
                  <Form.Label >Earnings</Form.Label>
                </Form.Group>
                <p className="descrip">Allowance, Fixed Allowance, Bonus and all</p>
                {this.state.earningInputs.map((earning, index) => (
                  <AddEarning
                    key={index}
                    id={earning.id}
                    text={earning.text}
                    amount={earning.amount}
                    epfEpfIncluded={earning.epfEpfIncluded}
                    onTextChange={(value) => this.handleEarningChange(index, "text", value)}
                    onAmountChange={(value) => this.handleEarningChange(index, "amount", value)}
                    onCheckboxChange={(value) => this.handleEarningChange(index, "epfEpfIncluded", value)}
                    onDelete={() => this.deleteEarningInput(index)}
                  />
                ))}
                <Button onClick={this.addEarningInput} className="btn">
                <img src={addIcon} alt="Add" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  Add Another Earning</Button>
                <Form.Group className="mb-3">
                  <Form.Label>Deductions</Form.Label>
                </Form.Group>
                <p className="descrip">Salary Advances, Loan Deductions and all</p>
                {this.state.deductionInputs.map((deduction, index) => (
                  <AddDeduction
                    key={index}
                    id={deduction.id}
                    text={deduction.text}
                    amount={deduction.amount}
                    onTextChange={(value) => this.handleDeductionChange(index, "text", value)}
                    onAmountChange={(value) => this.handleDeductionChange(index, "amount", value)}
                    onDelete={() => this.deleteDeductionInput(index)}
                  />
                ))}
                <Button onClick={this.addDeductionInput} className="btn">
                <img src={addIcon} alt="Add" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  Add Another Deduction</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5}>
            <Card className="salary-card">
              <Card.Body>
                <Salary salary={salary} deductions={deductions} earnings={earnings} earningInputs={this.state.earningInputs} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  salary: state.salary.salary,
  deductions: state.deductions.deductions,
  earnings: state.earnings.earnings,
});

const mapDispatchToProps = (dispatch) => ({
  addDeduction: (deduction) => dispatch(addDeduction(deduction)),
  deleteDeduction: (id) => dispatch(deleteDeduction(id)),
  enterBasicSalary: (salary) => dispatch(enterBasicSalary(salary)),
  addEarning: (earning) => dispatch(addEarning(earning)),
  deleteEarning: (id) => dispatch(deleteEarning(id)),
  resetBasicSalary: () => dispatch(resetBasicSalary()),
  resetEarning: () => dispatch(resetEarning()),
  resetDeductions: () => dispatch(resetDeductions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
