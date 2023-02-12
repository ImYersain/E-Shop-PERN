import React, { useState, useContext } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { REGISTRATION_ROUTE } from "./../utils/consts";
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { registration, login } from "../api/userAPI";
import { observer } from "mobx-react-lite";
import { Context, IContextProviderProps } from '../index';

const Auth = observer(() => {
  const isLogin = useLocation().pathname === LOGIN_ROUTE;
  const context = useContext<IContextProviderProps | null>(Context);
  const userStore = context?.user;
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const click = async () => {
    try {
      let user;

      if (isLogin) { //если страница логина то логин, иначе регистрация
        user = await login({ email, password });
      } else {
        user = await registration({ email, password });
      }

      if(user) {
        userStore?.setUser(user);
      }
      userStore?.setIsAuth(true);
      navigate(SHOP_ROUTE);

    } catch (e:any) {
      alert(e.response.data.message)
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 200 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Doesn't have account?
                <NavLink to={REGISTRATION_ROUTE}>Registration!</NavLink>
              </div>
            ) : (
              <div>
                Do you already have an account?
                <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
              </div>
            )}

            <Button onClick={() => click()} variant={"outline-success"}>
              {isLogin ? "Login" : "Register"}
            </Button>
          </Form>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
