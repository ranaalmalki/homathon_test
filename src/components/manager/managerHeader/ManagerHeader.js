import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../student/StudentHeader/header.css";
import ManagerHome from '../managerHome/ManagerHome';
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import allTrainers from "../allTrainers/allTrainers";
export default class ManagerHeader extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div>
<Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">مـ نـ صـ ـة  الأنــديــة</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto" >
    <Link to="/ManagerHeader/Home">
      <Nav.Link href="<ManagerHome/>">الرئيسية</Nav.Link>
      </Link>
      <Link to="/ManagerHeader/trainers">
      <Nav.Link href="<allTrainers/>">المدربين</Nav.Link>
      </Link>
      <NavDropdown  title="نجرب" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">واحد</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">اثنين</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">ثلاث</NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item href="#action/3.4">اربع</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>


      </div>
      <Switch>
          <Route
            exact={true}
            path="/ManagerHeader/Home"
            component={ManagerHome}
          ></Route>
  <Route
            
            path="/ManagerHeader/trainers"
            component={allTrainers}
          ></Route>
        </Switch>
      </BrowserRouter>

    );
  }

}