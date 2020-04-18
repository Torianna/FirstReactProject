import React, { Component } from 'react';
import './App.css';
import Employees from '../components/Employees/Employees'
import axios from 'axios';

class App extends Component {

  state= {
    employees:[
      {name:'E1'},
      {name:'E2'},
      {name:'E3'}
  ]
  }

  componentDidMount()
  {
    //wykonuje sie asynchronicznie więc trzeba inaczej obłużyc
    //nie mozna const emplyees =
    //trzeba poczekać na odpowiedź, więc:
      axios.get('http://dummy.restapiexample.com/api/v1/employees',null).then(
        (response) =>
        {
          console.log(response);
        }
      );
      

  }


  render(){

    return (
    
      <div className='App'>
        <h1>Employees</h1>
        <Employees employees={this.state.employees}/>
      </div>
     

    );
  }
}

export default App;