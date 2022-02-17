import Link from "next/link";

function HomePage() {
  return (
    <div className="bg-teal-500 text-slate-100 p-10 transition-colors">
      Go to{" "}
      <Link href="/about">
        <span className="cursor-pointer">About</span>
      </Link>{" "}
      Page
    </div>
  );
}

export default HomePage;
