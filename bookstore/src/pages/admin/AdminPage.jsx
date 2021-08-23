import React from "react";

export default function AdminPage() {
  return (
    <div className="container-fluid">
      <p className="fs-3"> Admin Paneli</p>
      <hr />
      <div className="row">
        <div className="col-3 bg-secondary ">
          <div className="row p-2"> Edit Categories</div>
          <div className="row p-2"> Edit Books</div>
          <div className="row p-2"> Edit Publishments</div>
          <div className="row p-2"> Edit Authors</div>
          <div className="row p-2"> Edit Users</div>
          <div className="row p-2"> Edit Customers</div>
        </div>
        <div className="col-9"></div>
      </div>
    </div>
  );
}
