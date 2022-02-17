import Link from "next/link";

function About() {
  return (
    <div className="bg-indigo-500 text-slate-100 p-10 transition-colors">
      Go to{" "}
      <Link href="/">
        <span className="cursor-pointer">Home</span>
      </Link>{" "}
      Page
    </div>
  );
}

export default About;
