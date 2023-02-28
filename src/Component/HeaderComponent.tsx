import { Navbar, Container, Nav } from "react-bootstrap";
import {Link as RouteLink } from 'react-router-dom';
import logo from '../logo.svg';

export const HeaderComponent =()=>{
    return  <Navbar bg="dark" variant="dark">
    <Container fluid>
      <RouteLink className="navbar-brand" to="/"><img src={logo} title="CodeMind" width={50} height={50}/></RouteLink>
      <Nav className="me-auto">
        <RouteLink className="nav-link" to="/home">Home</RouteLink>
        <RouteLink className="nav-link" to="/users">Users</RouteLink>
        <RouteLink className="nav-link" to="/user-details">User Details</RouteLink>
      </Nav>
    </Container>
  </Navbar>;
}