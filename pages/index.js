import Link from "next/link";
import Button from "../components/Button";

function HomePage() {
  return (
    <Link href="/about">
      <a>
        <Button text="Go to About page" />
      </a>
    </Link>
  );
}

export default HomePage;
