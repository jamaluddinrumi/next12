import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";

function HomePage() {
  return (
    <>
      <Head>
        <title>Home - Next 12</title>
      </Head>
      <Link href="/about">
        <a>
          <Button text="Go to About page" />
        </a>
      </Link>
    </>
  );
}

export default HomePage;
