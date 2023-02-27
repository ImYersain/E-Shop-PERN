import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { NavBar } from "./components/NavBar";
import { Container, Spinner } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context, IContextProviderProps } from "./index";
import { check } from "./api/userAPI";
import { useState } from "react";

const App = observer(() => {
  const context = useContext<IContextProviderProps | null>(Context);
  const userStore = context?.user;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    check()
      .then(() => {
        userStore?.setUser({});
        userStore?.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container>
        <Spinner
          animation="border"
          role="status"
          style={{ width: "4rem", height: "4rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
