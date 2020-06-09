import React from "react";
import { Card, Col, Image, Row, Container } from "react-bootstrap";

/* Import Layouts */
import Layout from "../components/Layouts";

/* Next Imports */

import Head from "next/head";
import Link from "next/link";

/* Import Bootstrap */

import "bootstrap/dist/css/bootstrap.min.css";

/* Import Navbar */

import Navigation from "../components/Navigation";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Cenk Dinçtürk</title>
      </Head>
      <Navigation />
      <Container>
        <Row className="text-center">
          <Col xs={12} md={12}>
            <Image
              style={{ width: "150px;", height: "150px;" }}
              src="https://i.ibb.co/SmyH343/cenk-cv-photo.png"
              roundedCircle
            />
          </Col>
          <Col className="text-center">
            <p className="text-center">Merhaba, ben Cenk.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default HomePage;
