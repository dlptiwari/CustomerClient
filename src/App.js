import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddCustomer from './Components/AddCustomer';
import $ from 'jquery';
import Customers from './Components/Customers';
import Table from './Components/Table';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import './App.css';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      
      customers: []
    }
  }


  getAllCustomers() {

    $.ajax({

      url: 'http://localhost:8080/customers',
      dataType: 'json',
      cacche: false,
      success: function (data) {

        this.setState({ customers: data }, function () {

          console.log("Inside getAllCustomers" +this.state.customers);
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);

      }
    });

  }

  addCustomer(newCustomer) {

    $.ajax({

      url: 'http://localhost:8080/customers',
      dataType: 'json',
      cacche: false,
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: newCustomer,
      success: function (data) {
        this.setState({ customers: data })
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);

      }
    });

  }

  componentWillMount() {

    this.getAllCustomers();
  }

  componentDidMount() {

    this.getAllCustomers();
  }

  handleAddCustomer(customer) {

    let customers = this.state.customers;
    customers.push(customer);

    this.setState({ customers: customers });


    this.addCustomer(JSON.stringify(customer));
  }

  handleDeleteCustomer(id) {
    let customers = this.state.customers;
    let index = customers.findIndex(x => x.id == id);
    customers.splice(index, 1);
    this.setState({ customers: customers })
    //console.log(id);
    this.delete(id);

  }

  delete(id) {

    $.ajax({

      url: 'http://localhost:8080/customers',
      dataType: 'json',
      cacche: false,
      type: 'DELETE',
      corsOrigin: true,
      corsDomain: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      contentType: 'application/json; charset=utf-8',
      data: id,
      success: function (data) {
        this.setState({ customers: data })
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);

      }
    });

  }


  render() {

    const pStyle = {
      fontSize: '15px',
      textAlign: 'center',
      width: '24%'
    };

    const pTable = {
      fontSize: '15px',
      textAlign: 'center',
      width: '100%',
      height: '50px'
    };

    return (
      <MuiThemeProvider>
        <div className="App">
          <AddCustomer AddCustomer={this.handleAddCustomer.bind(this)} />
          <hr />
          <Customers customers={this.state.customers} onDelete={this.handleDeleteCustomer.bind(this)} />
          <Table 
          handleRemove = {this.handleDeleteCustomer.bind(this)}
          data={this.state.customers} header={[
            {
              name: 'First Name',
              prop: 'firstName',
            },
            {
              name: 'Last Name',
              prop: 'lastName',
            },
            {
              name: 'Address',
              prop: 'address',
            },
            {
              name: 'Phone Number',
              prop: 'phoneNumber',
            },
            {
              name: 'Email',
              prop: 'email',
            }
          ]} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;