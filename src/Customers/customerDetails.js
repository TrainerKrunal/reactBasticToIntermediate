

export default function CustomerDetails(props){
    const customerData = props.customer
    return(
        <div>
            <h3>Customer Details</h3>
            <hr/>
            <p>Id: {customerData.id}</p>
            <p>FirstName: {customerData.firstName}</p>
            <p>LastName: {customerData.lastName}</p>
            <p>Email: {customerData.email}</p>
        </div>
    )

}