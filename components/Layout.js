import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <Header></Header>
      <main className="container grid place-content-center h-screen">
        {children}
      </main>
      <Footer></Footer>
    </>
  );
}
