import React, { useContext } from "react";
import { Context, IContextProviderProps } from '../index';
import Container from "react-bootstrap/Container";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
//import Button from 'react-bootstrap/Button';
import { Button, Navbar, Nav } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import "bootstrap/dist/css/bootstrap.css";

export const NavBar = observer(() => {
  const context = useContext<IContextProviderProps | null>(Context);

  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <NavLink style={{ marginLeft: "10px", color: "white" }} to={SHOP_ROUTE}>
          BuyDevice
        </NavLink>
        {context?.user.isAuth ? (
          <Nav
            className="ml-auto"
            style={{ color: "white", marginLeft: "auto" }}
          >
            <Button variant="outline-light">Log out</Button>
            <Button variant="outline-light" className="ml-4">
              Admin Panel
            </Button>
          </Nav>
        ) : (
          <Nav
            className="ml-auto"
            style={{ color: "white", marginLeft: "auto" }}
          >
            <Button
              variant="outline-light"
              onClick={() => context?.user.setIsAuth(true)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
