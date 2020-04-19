import React, { Component } from 'react';
import styles from './EmployeeDetails.module.css'


class EmployeeDetails extends Component {


    render() {

        return (
            <div className={styles.EmployeeDetails}>
                <div className={styles.EmployeeDetailsDiv}>Name: {this.props.name}</div>
                <div className={styles.EmployeeDetailsDiv}>Salary: {this.props.salary}</div>
                <div className={styles.EmployeeDetailsDiv}>Age: {this.props.age}</div>
            </div>
        )
    }

}

export default EmployeeDetails;