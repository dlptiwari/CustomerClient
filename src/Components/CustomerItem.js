import React, { Component } from 'react';
import ReactTable from 'react-table';

class CustomerItem extends Component {

    deleteCustomer(id) {

        console.log("test");

        this.props.onDelete(id)
    }

    render() {

        const pStyle = {
            fontSize: '15px',
            textAlign: 'center',
            width: '20%'
        };

        const pTable = {
            fontSize: '15px',
            textAlign: 'center',
            width: '100%',
            height: '50px'
        };

        const columns = [{
            Header: 'First Name',
            accessor: 'firstName'
        },
        {

            Header: 'Last Name',
            accessor: 'lastName'
        },
        {

            Header: 'Address',
            accessor: 'address'
        },
        {

            Header: 'PhoneNumber',
            accessor: 'phoneNumber'
        },
        {
            Header: 'Email',
            accessor: 'email'
        }]

        return (
            <h1></h1>
                );
            }
        }
        
export default CustomerItem;