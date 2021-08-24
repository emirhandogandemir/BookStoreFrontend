import React, { useState, useEffect } from "react";
import PublisherService from "../../services/publisherService";
import AdminSideBar from "../admin/AdminSideBar";
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
                  <td>{publisher.website}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
