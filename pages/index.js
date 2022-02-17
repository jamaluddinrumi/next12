import Link from "next/link";

function HomePage() {
  return (
    <Link href="/about">
      <button class="py-2 px-3 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 focus:outline-none">
        About
      </button>
    </Link>
  );
}

export default HomePage;
