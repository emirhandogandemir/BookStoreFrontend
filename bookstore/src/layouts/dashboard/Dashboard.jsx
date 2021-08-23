import React from "react";
import HomePage from "../homepage/HomePage";
import { Route, Switch } from "react-router";
import Login from "../login/Login";
import SignUp from "../signUp/SignUp";
import BookDetail from "../../pages/BookDetail";
import Error404 from "../Error404/Error404";
import CategoryList from "../../pages/CategoryList";
import CategoryDetail from "../../pages/CategoryDetail";
import MyBlog from "../../pages/MyBlog";
import AdminPage from "../../pages/admin/AdminPage";
import EditCustomer from "../../pages/Edit/EditCustomer";
import EditPublisher from "../../pages/Edit/EditPublisher";
import EditCategory from "../../pages/Edit/EditCategory";
export default function Dashboard() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signUp" component={SignUp}></Route>
        <Route path="/books/:id" component={BookDetail}></Route>
        <Route exact path="/categories" component={CategoryList}></Route>
        <Route
          exact
          path="/categories/:categoryId"
          component={CategoryDetail}
        ></Route>
        <Route exact path="/blog" component={MyBlog}></Route>
        <Route path="/admin" component={AdminPage}></Route>
        <Route exact path="/admineditcustomer" component={EditCustomer}></Route>
        <Route exact path="/admineditcategory" component={EditCategory}></Route>
        <Route
          exact
          path="/admineditpublisher"
          component={EditPublisher}
        ></Route>
        <Route path="*" component={Error404}></Route>
      </Switch>
    </div>
  );
}
