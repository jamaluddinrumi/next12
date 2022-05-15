import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Next 12</title>
      </Head>
      <Link href="/">
        <a>
          <Button text="Go to Home page" />
        </a>
      </Link>
    </>
  );
}

export default AboutPage;
