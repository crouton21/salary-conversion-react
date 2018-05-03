import React, { Component } from 'react';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeTotal from '../EmployeeTotal/EmployeeTotal';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();

    this.state = {
      employeeList: [],
    };
  }

  deleteEmployee = (employeeToDelete) => {
    console.log(employeeToDelete);
    const matchEmployee = (employee) => employee.idNumber !== employeeToDelete.idNumber;
    this.setState({
      employeeList: this.state.employeeList.filter(matchEmployee),
    });
    this.props.dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: this.state.employeeList,
    })
  }

  render() {
    return (
      <div>
        <EmployeeForm />
        {/* <pre>{JSON.stringify(this.props.reduxState.submitEmployee)}</pre> */}
        <EmployeeList employeeList={this.props.reduxState.submitEmployee} deleteEmployee={this.deleteEmployee} />
        <EmployeeTotal employeeList={this.props.reduxState.submitEmployee} />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapReduxStateToProps)(App);
