import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeObject: {
        firstName: '',
        lastName: '',
        idNumber: '',
        jobTitle: '',
        annualSalary: '',
      },
    };
  }
  
  addEmployee = (newEmployee) => {
    this.props.dispatch({
      type: 'SUBMIT_EMPLOYEE',
      payload: this.state.employeeObject,
    })
  }

  handleEmployeeChange = () => (event) => {
    this.setState({
      employeeObject: {
      ...this.state.employeeObject, 
      [event.target.name]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addEmployee(this.state);
    this.clearEmployeeFields();
  }

  clearEmployeeFields = () => {
    console.log('in clear fields', this.state);
     this.setState({
       employeeObject: {
        firstName: '',
        lastName: '',
        idNumber: '',
        jobTitle: '',
        annualSalary: '',
       }
     });
     console.log('in clear fields', this.state);
   }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleEmployeeChange()} placeholder="First Name" value={this.state.employeeObject.firstName} name="firstName" />
        <input onChange={this.handleEmployeeChange()} placeholder="Last Name" value={this.state.employeeObject.lastName} name="lastName" />
        <input onChange={this.handleEmployeeChange()} placeholder="ID Number" value={this.state.employeeObject.idNumber} name="idNumber" />
        <input onChange={this.handleEmployeeChange()} placeholder="Job Title" value={this.state.employeeObject.jobTitle} name="jobTitle" />
        <input onChange={this.handleEmployeeChange()} placeholder="Annual Salary" value={this.state.employeeObject.annualSalary} name="annualSalary" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// EmployeeForm.propTypes = {
//   addEmployee: PropTypes.func.isRequired,
// };

const mapReduxStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapReduxStateToProps)(EmployeeForm);