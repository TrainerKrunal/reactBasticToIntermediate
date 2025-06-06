import { useState } from "react";

export default function CustomerForm(props) {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [id, setId] = useState("");

    const  [formData,setNewFormData]=useState({
        id: "",
        firstName: "",
        lastName: "",
        email: ""
       
    })

    const resetData=(newcustomer)=>{
        //logic goes here to reset the form data
    }

    const handleChange=(event)=>{
       
    
        // const name = event.target.name;
        // const value = event.target.value;
        const {name,value}=event.target; // destructuirng the name and value from the event target
        let newFormData={...formData} //creating a copy of the formData state
        newFormData[name]=value; //updating the specific field in the formData copy
        setNewFormData(newFormData); //updating the formData state with the new copy
    }

    const saveCustomer=()=>{
        const customer={...formData}; //creating a new customer object from the formData state
        props.createCustomer(customer); //calling the createCustomer function passed as a prop with the new customer object
       // addCustomer(customer); //calling the addCustomer function to add the new customer to the list
    }

    const handleSubmit=(event)=>{
       event.preventDefault(); //preventing the default form submission behavior
        saveCustomer(); //calling the saveCustomer function to save the new customer
        setNewFormData({ //resetting the formData state to initial values
            id: "",
            firstName: "",
            lastName: "",
            email: ""
        });
    }


    return(
        <div>
            <h3>Add Customer</h3>
            <hr/>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text"
                            name="firstName"
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            onChange={(event)=>handleChange(event)} />
                </div>
                <div className="form-group">
                    <input type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            onChange={(event)=>handleChange(event)} />
                </div>
                <div className="form-group">
                    <input type="text"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={(event)=>handleChange(event)} />
                </div>
                <input type="submit" value="Add Customer" className="btn btn-success" />
                 
            </form>
        </div>
    )
}