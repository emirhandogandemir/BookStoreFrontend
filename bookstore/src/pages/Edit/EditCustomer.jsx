import React, { useState, useEffect } from "react";
import CustomerService from "../../services/customerService";
import AdminSideBar from "../admin/AdminSideBar";
import AddCustomer from "./Add/AddCustomer";
import DeleteCustomer from "./Delete/DeleteCustomer";
import UpdateCustomer from "./Update/UpdateCustomer";
export default function EditCustomer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    let customerService = new CustomerService();
    customerService.getAll().then((result) => setCustomers(result.data.data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSideBar></AdminSideBar>
        <div className="col-9">
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
              {customers.map((customer, index) => (
                <tr>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.phoneNumber}</td>
                  <td>{customer.email}</td>
                  <td>
                    <UpdateCustomer
                      customer={customer}
                      onSuccess={handleCustomerUpdateSuccess}
                    ></UpdateCustomer>
                  </td>
                  <td>
                    <DeleteCustomer
                      id={customer.id}
                      onSuccess={handleCustomerDeleteSuccess}
                    ></DeleteCustomer>
                  </td>
                  <td key={index}></td>
                </tr>
              ))}
              <AddCustomer onSuccess={handleCustomerAddSuccess}></AddCustomer>
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );

  function handleCustomerUpdateSuccess(updatedCustomer) {
    const newCustomers = [...customers]; // aynı referans olmasın diye
    const targetIndex = customers.findIndex(
      (customer) => customer.id === updatedCustomer.id
    ); // değişiklik yapılmış olan verinin indexini
    newCustomers.splice(targetIndex, 1, updatedCustomer);
    setCustomers(newCustomers);
  }

  function handleCustomerAddSuccess(updatedCustomer) {
    const newCustomers = [...customers, updatedCustomer]; // aynı referans olmasın diye
    setCustomers(newCustomers);
  }

  function handleCustomerDeleteSuccess(id) {
    const newCustomers = [...customers];
    const targetIndex = customers.findIndex((customer) => customer.id === id);
    newCustomers.splice(targetIndex, 1);
    setCustomers(newCustomers);
  }

  // function handleEducationUpdateSuccess(updatedEducation) {
  //   const newEducations = [...jobSeekerCv.educations];
  //   const targetIndex = jobSeekerCv.educations.findIndex(
  //     (education) => education.id === updatedEducation.id
  //   );
  //   newEducations.splice(targetIndex, 1, updatedEducation);
  //   setJobSeekerCvs({ ...jobSeekerCv, educations: newEducations });
  // }
}
