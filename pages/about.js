import Link from "next/link";

function AboutPage() {
  return (
    <Link href="/">
      <button class="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500/50 focus:outline-none">
        Home Page
      </button>
    </Link>
  );
}

export default AboutPage;
