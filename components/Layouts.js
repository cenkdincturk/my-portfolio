import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Cenk Dinçtürk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>{children}</main>
      <footer>Design by Cenk Dinçtürk</footer>
    </div>
  );
}

export default Layout;
