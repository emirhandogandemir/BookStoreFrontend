import React from "react";
import "./footer.scss";
export default function Footer() {
  return (
    <div className="container-fluid">
      <h2> Join Our Newsletter</h2>
      <label htmlFor="footerinput">
        Signup to be the first to hear about exclusive deals, special offers and
        upcoming collections
      </label>{" "}
      <br />
      <br />
      <input
        type="text"
        name="footerinput"
        className="input-footer"
        placeholder="Enter email for weekly newsletter"
      ></input>
      <button className="button-footer"> Subscribe</button>
      <div className="row">
        <div className="col-sm-4 ">Naberss</div>
        <div className="col-sm-2 ">
          <h3 className="text-left">Explore</h3>
          <br />
          <ul>
            <li className="li-footer"> SiteMap</li>
            <li className="li-footer"> SiteMap</li>
            <li className="li-footer"> BookMarks</li>
            <li className="li-footer"> Sign/Join</li>
          </ul>
        </div>
        <div className="col-sm-2 ">
          <h3 className="text-left">Customer Service</h3>
          <br />
          <ul>
            <li className="li-footer"> SiteMap</li>
            <li className="li-footer"> SiteMap</li>
            <li className="li-footer"> BookMarks</li>
            <li className="li-footer"> Sign/Join</li>
            <li className="li-footer"> BookMarks</li>
            <li className="li-footer"> Sign/Join</li>
          </ul>
        </div>

        <div className="col-sm-2 ">
          <h3 className="text-left">Policy</h3>
          <br />
          <ul>
            <li className="li-footer"> SiteMap</li>
            <li className="li-footer"> SiteMap</li>
            <li className="li-footer"> BookMarks</li>
            <li className="li-footer"> Sign/Join</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
