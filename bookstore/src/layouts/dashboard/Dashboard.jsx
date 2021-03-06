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
import EditAuthor from "../../pages/Edit/EditAuthor";
import EditUser from "../../pages/Edit/EditUser";
import EditBook from "../../pages/Edit/EditBook";
import ContactPage from "../../pages/ContactPage";
import CartDetail from "../../pages/CartDetail";
import UserDetail from "../../pages/User/UserDetail";
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
        <Route path="/contact" component={ContactPage}></Route>
        <Route exact path="/admineditcustomer" component={EditCustomer}></Route>
        <Route exact path="/admineditcategory" component={EditCategory}></Route>
        <Route
          exact
          path="/admineditpublisher"
          component={EditPublisher}
        ></Route>
        <Route exact path="/admineditauthor" component={EditAuthor}></Route>
        <Route exact path="/adminedituser" component={EditUser}></Route>
        <Route exact path="/admineditbook" component={EditBook}></Route>
        <Route path="/cartdetail" component={CartDetail}></Route>
        <Route path="/userdetail" component={UserDetail} />
        <Route path="*" component={Error404}></Route>
      </Switch>
    </div>
  );
}
