import { useState, useEffect } from "react";
import AdminSideBar from "../admin/AdminSideBar";
import UserService from "../../services/userService";
export default function EditUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getAll()
      .then((result) => setUsers(result.data.data))
      .catch("Kullanıcılar getirilirken hata ile karşılaşıldı");
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSideBar></AdminSideBar>
        <div className="col-9">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Kullanıcı Adı</th>
                  <th scope="col">Adı </th>
                  <th scope="col">Soyadı</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
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
                    <td key={index}></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
