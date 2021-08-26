import React, { useState, useEffect } from "react";
import PublisherService from "../../services/publisherService";
import AdminSideBar from "../admin/AdminSideBar";
import UpdatePublisher from "./Update/UpdatePublisher";
import AddPublisher from "../Edit/Add/AddPublisher";
import DeletePublisher from "./Delete/DeletePublisher";
export default function EditPublisher() {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    let publisherService = new PublisherService();
    publisherService.getAll().then((result) => setPublishers(result.data.data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSideBar></AdminSideBar>
        <div className="col-9">
          {" "}
          <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">WebSite</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {publishers.map((publisher) => (
                <tr>
                  <td>{publisher.name}</td>
                  <td>{publisher.email}</td>
                  <td>{publisher.webSite}</td>
                  <td>
                    <UpdatePublisher
                      publisher={publisher}
                      onSuccess={handleCustomerUpdateSuccess}
                    ></UpdatePublisher>
                  </td>
                  <td>
                    <DeletePublisher
                      id={publisher.id}
                      onSuccess={handleCustomerDeleteSuccess}
                    ></DeletePublisher>
                  </td>
                </tr>
              ))}
              <AddPublisher onSuccess={handleCustomerAddSuccess}></AddPublisher>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  function handleCustomerUpdateSuccess(updatedPublisher) {
    const newPublisher = [...publishers]; // aynı referans olmasın diye
    const targetIndex = publishers.findIndex(
      (publisher) => publisher.id === updatedPublisher.id
    ); // değişiklik yapılmış olan verinin indexini
    newPublisher.splice(targetIndex, 1, updatedPublisher);
    setPublishers(newPublisher);
  }

  function handleCustomerAddSuccess(updatedPublisher) {
    const newPublisher = [...publishers, updatedPublisher]; // aynı referans olmasın diye
    setPublishers(newPublisher);
  }

  function handleCustomerDeleteSuccess(id) {
    const newPublisher = [...publishers];
    const targetIndex = publishers.findIndex(
      (publisher) => publisher.id === id
    );
    newPublisher.splice(targetIndex, 1);
    setPublishers(newPublisher);
  }
}
