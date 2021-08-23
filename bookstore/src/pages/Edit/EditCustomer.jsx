import React, { useState, useEffect } from "react";
import CustomerService from "../../services/customerService";
export default function EditCustomer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    let customerService = new CustomerService();
    customerService.getAll().then((result) => setCustomers(result.data.data));
  }, []);

  return (
    <table className="table table-striped">
      <thead className="thead-light">
        <tr>
          <th scope="col">FirstName</th>
          <th scope="col">LastName</th>
          <th scope="col">PhoneNumber</th>
          <th scope="col">Email</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.phoneNumber}</td>
            <td>{customer.email}</td>
            <td>
              <button type="button" className="btn btn-primary">
                Update
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-secondary">
                Detail
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
