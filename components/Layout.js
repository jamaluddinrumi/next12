import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="grid place-content-center h-screen">{children}</main>
    </>
  );
}
