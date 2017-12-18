import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees'

const EmployeeList = ( props ) => {
    return (
        <div>
            <div className="employee-list">
                employee list
            </div>
        </div>
    );
};

export default createContainer( () => {
    Meteor.subscribe( 'employees' );

    return {
        employees: Employees.find( {} ).fetch()
    }

}, EmployeeList );
