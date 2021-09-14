import React from "react";
import { useUserContext } from "../../context/UserContext";
export default function UserDetail() {
  const [state] = useUserContext();

  return (
    <div className="container-fluid">
      <div className="row">
        <h3> Kullanıcı Bilgileri Sayfası</h3>
        <div className="col-3"></div>
        <div className="col-6">
          <div>
            <h5> {state?.authenticatedUser?.username}</h5>
            <h5>{state?.authenticatedUser?.email}</h5>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
