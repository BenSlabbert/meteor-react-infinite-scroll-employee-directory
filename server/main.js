import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees'
import _ from 'lodash';
import { image, helpers } from 'faker';

Meteor.startup( () => {
    const numRecords = Employees.find( {} ).count();
    console.log( 'numRecords', numRecords );

    if ( !numRecords ) {
        // add data...
        _.times( 5000, () => {
            const { name, email, phone } = helpers.createCard();
            Employees.insert({
                name,
                email,
                phone,
                avatar: image.avatar()
            });
        } );
    }

} );
