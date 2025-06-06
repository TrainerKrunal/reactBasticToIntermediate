import { useState } from "react";
import CustomerForm from "./customerForm";
import CustomerDetails from "./customerDetails";
import customerData from "./customers.json"
 
export default function CustomersList(){


    const [customers,setCustomers]=useState(customerData);
    const [selectedCustomer,setSelectedCustomer]=useState(null);

    const onCustomerSelect=(customer)=>{
        setSelectedCustomer(customer);
    }

    const tableRows=customers.map((customer,index)=>{
        return(
            <tr key={index} onClick={()=>onCustomerSelect(customer)}>
               <td>{customer.id}</td>
               <td>{customer.firstName}</td>
               <td>{customer.lastName}</td>
               <td>{customer.email}</td>
            </tr>
        )
    })

    const addCustomer=(newCustomer)=>{
        const totalCustomers = customers.length
        newCustomer.id=totalCustomers + 1; // Assigning a new ID based on the current length of the customers array 
        let newList=[...customers]
        newList.push(newCustomer); // Adding the new customer to the list
        setCustomers(newList); // Updating the state with the new list of customers
    }

    return(
        <div>
            <table className="table table-bordered table-hover ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-6">
                    <CustomerForm  createCustomer={addCustomer}/>
                </div>
                <div className="col-md-6">
                    { selectedCustomer ? <CustomerDetails customer={selectedCustomer} /> : null}
                </div>
            </div>
         
        </div>
    )
}