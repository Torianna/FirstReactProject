import React,{Component} from 'react';
import styles from './Employees.module.css';
import Employee from './Employee/Employee';



class Employees extends Component{


    render(){
        
    const employees=this.props.employees.map((employee,index)=>
    {
        return(<Employee name={employee.name}/>);
    });
        return(
        <div className={styles.Employees}>
            {employees}
        </div>
        );
    }

}
export default Employees;