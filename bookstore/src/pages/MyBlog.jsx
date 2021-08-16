import React from "react";

export default function MyBlog() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <img
            src={"../../assets/images/emirhan.jpeg"}
            alt="emirhan"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-sm-8">
          {" "}
          Merhabalar ben Emirhan Doğandemir , Karadeniz Teknik Üniversitesi
          Yazılım Mühendisliği bölümünde 3. sınıfa geçtim . Şu anda Java
          Teknolojileri ile ilgileniyorum .
        </div>
      </div>
    </div>
  );
}
