import React, { Component } from 'react';
import './App.css';
import Employees from '../components/Employees/Employees'
import axios from 'axios';
import EmployeeDetails from '../components/Employees/EmployeeDetails/EmployeeDetails';

class App extends Component {

  state= {
    employees:[],
    selectedEmployee: null
  }

  componentDidMount()
  {
    //wykonuje sie asynchronicznie więc trzeba inaczej obłużyc
    //nie mozna const emplyees =
    //trzeba poczekać na odpowiedź, więc:
      axios.get('http://dummy.restapiexample.com/api/v1/employees',null).then(
        (response) =>
        {
          const employees = response.data.data.slice(0,10);
          this.setState({employees:employees});
        }
      );
  }

  showSelectedEmployeeHandler = (id) => {
    console.log("Employee nr: " + id);
    axios.get('http://dummy.restapiexample.com/api/v1/employee/' + id,null).then(
      (response) => {
        console.log("jestem");
        this.setState({selectedEmployee: response.data});
      }
    );
  }

  saveEmployeeHandler = () =>{
    const employeeToSave={
      name: "Maria",
      salary:4500,
      age:15
    }

    axios.post('http://dummy.restapiexample.com/api/v1/create',employeeToSave,null).then(
      response =>{
        console.log(response);
      }
    );
  }

  deleteEmployeeHandler = () =>{
    const id=2;
    axios.delete('http://dummy.restapiexample.com/api/v1/delete/'+id,null).then(
      response =>{
        console.log(response);
      }
    );
  }

  updateEmployeeHandler = () =>{
    const id=2;
    const employeeToUpdate = {name:"test1",salary:"1123",age:"23"};
    axios.put('http://dummy.restapiexample.com/update'+id, employeeToUpdate,null).then(
      response =>{
        console.log(response);
      }
    );
  }


  render(){

      let selectedEmployee= null;

      if(selectedEmployee!==null){
        selectedEmployee=<EmployeeDetails name={this.state.selectedEmployee.employee_name}
        salary={this.state.selectedEmployee.employee_salary}
        age={this.state.selectedEmployee.employee_age}/>

      }


    return (
    
      <div className='App'>
        {selectedEmployee}
        <h1>Employees</h1>
        <Employees employees={this.state.employees} showSelectedEmployee={this.showSelectedEmployeeHandler} />
      <button onClick={this.saveEmployeeHandler} className="UpdateButton">Save employee</button>
      <button onClick={this.deleteEmployeeHandler} className="UpdateButton">Delete employee</button>
      <button onClick={this.updateEmployeeHandler} className="UpdateButton">Update employee</button>
      </div>
     

    );
  }
}

export default App;