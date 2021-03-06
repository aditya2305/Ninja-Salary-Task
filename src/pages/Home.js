import React, { useContext } from "react";

import { Row, Container, Col, Button, InputGroup } from "reactstrap";

import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Home.css";

const Home = () => {
  const context = useContext(UserContext);

  if (!context.user?.uid) {
    return <Redirect to="/signup" />;
  }

  return (
    <Container>
      <Row className=" mt-3 bigone">
        <div className="header">
          <h1>Welcome to Admin Panel</h1>
        </div>
      </Row>
    </Container>
  );
};

export default Home;
