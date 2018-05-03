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
    this.props.dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: employeeToDelete,
    })
  }

  render() {
    return (
      <div>
        <EmployeeForm />
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
