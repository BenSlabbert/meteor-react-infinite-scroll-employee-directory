import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './EmployeeDetail';

const PER_PAGE = 10;

class EmployeeList extends Component {

    constructor( props ) {
        super( props );
    }

    componentWillMount() {
        this.page = 2;
    }

    render() {
        return (
            <div>
                <div className="employee-list">
                    {this.props.employees.map( employee =>
                        <EmployeeDetail key={employee._id} employee={employee}/>
                    )}
                </div>
                <button onClick={this.handleButtonClick.bind( this )}
                        className="btn btn-primary">
                    Load More...
                </button>
            </div>
        );
    }

    handleButtonClick( e ) {
        e.preventDefault();
        Meteor.subscribe( 'employees', PER_PAGE * this.page );
        this.page += 1;
    }
}

export default createContainer( () => {
    Meteor.subscribe( 'employees', PER_PAGE );

    return {
        employees: Employees.find( {} ).fetch()
    }

}, EmployeeList );
