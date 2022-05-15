import Link from "next/link";
import Button from "../components/Button";

function AboutPage() {
  return (
    <Link href="/">
      <a>
        <Button text="Go to Home page" />
      </a>
    </Link>
  );
}

export default AboutPage;
