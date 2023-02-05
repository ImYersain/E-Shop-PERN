import React, { useContext } from "react";
import { Context, IContextProviderProps } from '../index';
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { Button, Navbar, Nav } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from './../utils/consts';

export const NavBar = observer(() => {
  const context = useContext<IContextProviderProps | null>(Context);
  const navigate = useNavigate();

  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <NavLink style={{ marginLeft: "10px", color: "white", outline: "none" }} to={SHOP_ROUTE}>
          BuyDevice
        </NavLink>
        {context?.user.isAuth ? (
          <Nav
            className="ml-auto"
            style={{ color: "white", marginLeft: "auto" }}
          >
            <Button variant="outline-light" className="ml-4" onClick={() => navigate(ADMIN_ROUTE)}>
              Admin Panel
            </Button>
            <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>Log out</Button>
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
