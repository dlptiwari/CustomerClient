import React, { Component } from 'react';
import '../App.css'

class AddCustomer extends Component {

    constructor() {

        super();

        this.state = {

            newCustomer: {}
        }
    }

    handleSubmit(e) {

        if (this.refs.firstName.value === '' || this.refs.lastName.value === '' || this.refs.phoneNumber.value === '') {

            alert("Name and Phone number are required fields");
        }
        else {

            console.log("Inside handle Submit method  " + this.refs.firstName.value);
            this.setState({
                newCustomer: {

                    firstName: this.refs.firstName.value,
                    lastName: this.refs.lastName.value,
                    address: this.refs.address.value,
                    phoneNumber: this.refs.phoneNumber.value,
                    email: this.refs.email.value
                }
            }, function () {

                this.props.AddCustomer(this.state.newCustomer);
                this.refs.form.reset();
            });
        }

        e.preventDefault();
    }

    render() {

        var divStyle = {
            backgroundColor: 'lightblue'
          };
          var headerStyle = {
            backgroundColor: 'grey',
            color: 'white'
            
          };

        return (


            <div>
                <h3 style={headerStyle}>Add Customer</h3>
                <form onSubmit={this.handleSubmit.bind(this)} ref="form">
                    <div style={divStyle}>
                        <table align="center">
                            <tr><td><label>First Name:</label></td>
                                <td><input type="text" ref="firstName" /></td></tr>
                            <br /><br />
                            <tr><td><label>Last Name:</label></td>
                                <td><input type="text" ref="lastName" /></td></tr>
                            <br /><br />
                            <tr><td><label>Address:</label></td>
                                <td><input type="text" ref="address" /></td></tr>
                            <br /><br />
                            <tr><td><label>Phone Number:</label></td>
                                <td><input type="text" ref="phoneNumber" /></td></tr>
                            <br /><br />
                            <tr><td><label>Email:</label></td>
                                <td><input type="text" ref="email" /></td></tr>


                            <br /> <br /> <tr align="center">
                                <input type="submit" value="Submit" />
                            </tr>

                        </table>
                    </div>

                </form>
            </div>
        );
    }
}

export default AddCustomer;