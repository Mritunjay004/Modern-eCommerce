import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Nav />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
