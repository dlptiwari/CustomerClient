import React, {Component} from 'react';
import CustomerItem from './CustomerItem';
import ReactTable from 'react-table';

class Customers extends Component {

    constructor(){
        super();
        
        this.state = {
            customers: [
              {
      
                firstName: "",
                lastName: ""
              }
      
            ]
          }
    }

    deleteCustomer(id){
        this.props.onDelete(id);

    }


    render() {
        //console.log("hiiiiiiii"+this.props.customers);
        return (
            
    
    <h1></h1>
        );
    }
    

}



export default Customers;