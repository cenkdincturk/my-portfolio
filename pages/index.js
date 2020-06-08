import React from "react";

/* Import Layouts */
import Layout from "../components/Layouts";

/* Next Imports */

import Head from "next/head";
import Link from "next/link";

/* Import Bootstrap */

import "bootstrap/dist/css/bootstrap.min.css";

/* Import Navbar */

import Navigation from "../components/Navigation";

function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Cenk Dinçtürk</title>
      </Head>
      <Navigation/>
      <p>Hakkımda yazacaklarım...</p>

    </Layout>
  );
}

export default HomePage;
