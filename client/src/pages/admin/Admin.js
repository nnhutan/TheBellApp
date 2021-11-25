import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Feedback from "./Feedback";
import Order from "./Order";
import Product from "./Product";
import User from "./User";
import App from "../../App";
import Contact from "./Contact";
import News from "./News";
import { Data } from "../../Context";
import Header from "../../components/admin/Header";

function Admin() {
  const { state } = useContext(Data);

  return state.isLoggedIn && state.user.role_id === "1" ? (
    <Router>
      <div>
        <Switch>
          <Route path="/admin/" component={Header} />
        </Switch>
        <Switch>
          <Route path="/admin/category" component={Category} />
          <Route path="/admin/feedback" component={Feedback} />
          <Route path="/admin/order" component={Order} />
          <Route path="/admin/product" component={Product} />
          <Route path="/admin/user" component={User} />
          <Route path="/admin/contact" component={Contact} />
          <Route path="/admin/news" component={News} />
          <Route path="/admin" component={Home} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
  ) : state.isLoading ? (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : (
    <Redirect to="/" />
  );
}

export default Admin;
